import Link from 'next/link';
import React from 'react';

import config from '../config';

const Header = () => (
  <>
    <div className="mobile-nav-panel">
      <i className="icon-reorder icon-large" />
    </div>
    <header id="header">
      <h1 className="blog-title">
        <Link href="/">
          <a>{config.title}</a>
        </Link>
      </h1>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/archives">
              <a>archives</a>
            </Link>
          </li>
          <li>
            <Link href="/atom.xml">
              <a>rss</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
