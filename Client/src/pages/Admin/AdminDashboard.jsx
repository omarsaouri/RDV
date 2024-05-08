import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SousAdminTab from "../../dashboardTabs/admin/SousAdminTab";
import UniteTab from "../../dashboardTabs/admin/UniteTab";
import SpecialiteTab from "../../dashboardTabs/admin/SpecialiteTab";
import AgendaTab from "../../dashboardTabs/admin/AgendaTab";

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
          <UniteTab />
        </TabPanel>
        <TabPanel>
          <SpecialiteTab />
        </TabPanel>
        <TabPanel>
          <AgendaTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default AdminDashboard;
