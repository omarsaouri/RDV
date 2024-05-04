import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SousAdminTab from "../../dashboardTabs/admin/SousAdminTab";

function AdminDashboard() {
  return (
    <Tabs>
      <TabList>
        <Tab>Aperçu</Tab>
        <Tab>Administrateur d'unité</Tab>
        <Tab>Unités</Tab>
        <Tab>Specialités</Tab>
        <Tab>Agendas</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>to do later</p>
        </TabPanel>
        <TabPanel>
          <SousAdminTab />
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default AdminDashboard;
