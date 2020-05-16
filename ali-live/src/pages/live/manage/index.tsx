import React, { useState } from 'react';
import './index.less';
import { Tabs } from 'antd';
import { useHistory } from 'react-router-dom';
import CollectionSettings from '../components/CollectionSettings';
import CustomMenu from '../components/CustomMenu';
import InformationControl from '../components/InformationControl';
import InteractiveSettings from '../components/InteractiveSettings';
import LiveControl from '../components/LiveControl';
import LiveStatistics from '../components/LiveStatistics';
import OperationRecord from '../components/OperationRecord';
import ViewingSettings from '../components/ViewingSettings';

export default () => {
    let history = useHistory(); // 路由跳转对象
    const { TabPane } = Tabs;

    function callback(key: String) {
        console.log(key);
    }

    return (
        <>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="直播控制" key="1">
                    <LiveControl />
                </TabPane>
                <TabPane tab="信息控制" key="2">
                    <InformationControl />
                </TabPane>
                <TabPane tab="互动设置" key="3">
                    <InteractiveSettings />
                </TabPane>
                <TabPane tab="观看设置" key="4">
                    <ViewingSettings />
                </TabPane>
                <TabPane tab="自定义菜单" key="5">
                    <CustomMenu />
                </TabPane>
                <TabPane tab="收录设置" key="6">
                    <CollectionSettings />
                </TabPane>
                <TabPane tab="操作记录" key="7">
                    <OperationRecord />
                </TabPane>
                <TabPane tab="直播统计" key="8">
                    <LiveStatistics />
                </TabPane>
            </Tabs>
      ,
        </>
    );
};
