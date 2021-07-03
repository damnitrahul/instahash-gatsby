const baseUrl =
  process.env.NODE_ENV === `production` ? "" : "http://localhost:3000"

export async function fetchReq(keyword, setState) {
  try {
    setState(st => ({ ...st, loading: true }))
    const req = await fetch(`${baseUrl}/tags?q=${keyword}`)
    const res = await req.json()
    const hashtag = res.hashtags
      .map(hash => ({
        tag: hash.hashtag.name,
        posts: hash.hashtag.search_result_subtitle,
        count: hash.hashtag.media_count,
      }))
      .sort((a, b) => b.count - a.count)
    setState(st => ({ data: hashtag, loading: false }))
    return hashtag
  } catch (e) {}
}

export async function fetchUsers(keyword, setState) {
  setState(st => ({ ...st, error: false, loading: true }))
  try {
    keyword = keyword.replace("@", "")

    const req = await fetch(`${baseUrl}/search?q=${keyword}`)
    const res = await req.json()
    if (res.users.length === 0) throw new Error("Not Found")
    const users = res.users
      .map(hash => ({
        username: hash.user.username,
        fullname: hash.user.full_name,
        dpsrc: hash.user.profile_pic_url,
        verified: hash.user.is_verified,
      }))
      .sort((a, b) => b.count - a.count)

    setState(st => ({ data: users, loading: false, error: false }))
  } catch (e) {
    setState(st => ({ error: true, loading: false, data: [] }))
  }

  return
}
export async function fetchProfile(keyword, setState) {
  try {
    keyword = keyword.replace("@", "")
    setState(st => ({ ...st, loading: true }))
    const req = await fetch(`${baseUrl}/profile?q=${keyword}`)
    const res = await req.json()
    const user = {
      username: res.graphql.user.username,
      fullname: res.graphql.user.full_name,
      dpSrc: res.graphql.user.profile_pic_url_hd,
      verified: res.graphql.user.is_verified,
      followers: res.graphql.user.edge_followed_by.count,
      following: res.graphql.user.edge_follow.count,
      bio: res.graphql.user.biography,
    }
    setState(st => ({ userProfile: user, loading: false }))
    return user
  } catch (e) {}
}
