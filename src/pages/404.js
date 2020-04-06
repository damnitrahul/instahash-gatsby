import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';
function NotFound() {
  return (
    <Layout>
      <div className="not-found">
        <h1>
          404 - Page Not Found. <Link to="/">Go Home</Link>
        </h1>
      </div>
    </Layout>
  );
}

export default NotFound;
