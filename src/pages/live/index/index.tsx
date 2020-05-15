import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>
        直播间列表首页
        <p>
          <Link to="/live/edit">edit</Link>
        </p>
        <p>
          <Link to="/live/create">create</Link>
        </p>
        <p>
          <Link to="/live/manage">manage</Link>
        </p>
      </h1>
    </div>
  );
};
