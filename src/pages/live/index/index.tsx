import React, { useState } from 'react';
import './index.less';
import { Button, Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Link } from 'umi';

export default () => {
  let history = useHistory(); // 路由跳转对象

  const [liveType, setLiveType] = useState('all');
  const [liveState, setStateType] = useState('all');
  const [liveLabel, setLabelType] = useState('all');
  const liveTypeList = [
    { name: '全部', value: 'all' },
    { name: '电视直播', value: '1' },
    { name: '视频直播', value: '2' },
    { name: '图文', value: '3' },
  ];
  const liveStateList = [
    { name: '全部', value: 'all' },
    { name: '直播中', value: '1' },
    { name: '未直播', value: '2' },
    { name: '已停播', value: '3' },
  ];
  const liveLabelList = [
    { name: '全部', value: 'all' },
    { name: '直播中', value: '1' },
    { name: '未直播', value: '2' },
    { name: '已停播', value: '3' },
  ];

  return (
    //       <Link to="/live/edit">edit</Link>
    <div className="page_live">
      <div className="top_container clearfix">
        <h1 className="title fl">直播管理</h1>
        <div className="fr">
          <Button type="primary">创建直播间</Button>
        </div>
      </div>

      <div className="select_container">
        <div className="select_list clearfix">
          <div className="select_label fl">直播间类型：</div>
          {liveTypeList.map((item, index) => {
            return (
              <div
                key={index}
                className={`select_item fl ${
                  liveType === item.value ? 'activeItem' : null
                }`}
                onClick={() => {
                  setLiveType(item.value);
                }}
              >
                {' '}
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="select_list clearfix">
          <div className="select_label fl">直播状态：</div>
          {liveStateList.map((item, index) => {
            return (
              <div
                key={index}
                className={`select_item fl ${
                  liveState === item.value ? 'activeItem' : null
                }`}
                onClick={() => {
                  setStateType(item.value);
                }}
              >
                {' '}
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="select_list clearfix">
          <div className="select_label fl">直播筛选：</div>
          {liveLabelList.map((item, index) => {
            return (
              <div
                key={index}
                className={`select_item fl ${
                  liveLabel === item.value ? 'activeItem' : null
                }`}
                onClick={() => {
                  setLabelType(item.value);
                }}
              >
                {' '}
                {item.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="search_container">
        <Input
          size="large"
          placeholder="支持快速搜索"
          prefix={<SearchOutlined />}
        />
      </div>

      <div className="live_list_container clearfix">
        <div className="live_item fl">
          <div className="live_video">
            <video
              controls
              src="rtmp://live.hkstv.hk.lxdns.com/live/hks"
            ></video>
          </div>
          <div
            className="live_content"
            onClick={() => {
              history.push('/live/edit');
            }}
          >
            <div className="live_title">实现产业链上下游企业临时复工</div>
            <div className="live_create_user">创建人：王鹏</div>
            <div className="live_tags">
              <Tag color="magenta">资讯</Tag>
            </div>

            <div className="operation_container clearfix">
              <div className="fl">
                <Button type="primary">编辑</Button>
              </div>
              <div className="fl">
                <Button type="primary">启用</Button>
              </div>
              <div className="fl">
                <Button type="primary">删除</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="live_item fl">
          <div className="live_video">
            <video
              controls
              src="rtmp://live.hkstv.hk.lxdns.com/live/hks"
            ></video>
          </div>
          <div className="live_content">
            <div className="live_title">实现产业链上下游企业临时复工</div>
            <div className="live_create_user">创建人：王鹏</div>
            <div className="live_tags">
              <Tag color="magenta">资讯</Tag>
            </div>

            <div className="operation_container clearfix">
              <div className="fl">
                <Button type="primary">编辑</Button>
              </div>
              <div className="fl">
                <Button type="primary">启用</Button>
              </div>
              <div className="fl">
                <Button type="primary">删除</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="live_item fl">
          <div className="live_video">
            <video
              controls
              src="rtmp://live.hkstv.hk.lxdns.com/live/hks"
            ></video>
          </div>
          <div className="live_content">
            <div className="live_title">实现产业链上下游企业临时复工</div>
            <div className="live_create_user">创建人：王鹏</div>
            <div className="live_tags">
              <Tag color="magenta">资讯</Tag>
            </div>

            <div className="operation_container clearfix">
              <div className="fl">
                <Button type="primary">编辑</Button>
              </div>
              <div className="fl">
                <Button type="primary">启用</Button>
              </div>
              <div className="fl">
                <Button type="primary">删除</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="live_item fl">
          <div className="live_video">
            <video
              controls
              src="rtmp://live.hkstv.hk.lxdns.com/live/hks"
            ></video>
          </div>
          <div className="live_content">
            <div className="live_title">实现产业链上下游企业临时复工</div>
            <div className="live_create_user">创建人：王鹏</div>
            <div className="live_tags">
              <Tag color="magenta">资讯</Tag>
            </div>

            <div className="operation_container clearfix">
              <div className="fl">
                <Button type="primary">编辑</Button>
              </div>
              <div className="fl">
                <Button type="primary">启用</Button>
              </div>
              <div className="fl">
                <Button type="primary">删除</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="live_item fl">
          <div className="live_video">
            <video
              controls
              src="rtmp://live.hkstv.hk.lxdns.com/live/hks"
            ></video>
          </div>
          <div className="live_content">
            <div className="live_title">实现产业链上下游企业临时复工</div>
            <div className="live_create_user">创建人：王鹏</div>
            <div className="live_tags">
              <Tag color="magenta">资讯</Tag>
            </div>

            <div className="operation_container clearfix">
              <div className="fl">
                <Button type="primary">编辑</Button>
              </div>
              <div className="fl">
                <Button type="primary">启用</Button>
              </div>
              <div className="fl">
                <Button type="primary">删除</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
