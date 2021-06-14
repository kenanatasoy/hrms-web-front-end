import React, { useState, useEffect } from "react";
import { Menu } from 'semantic-ui-react'
import JobTitleService from "../services/JobTitleService"

export default function JobTitles() {
  
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);
  
  return (
    <div>
      <Menu vertical>
      {jobTitles.map((jobTitle) => (
        <Menu.Item>{jobTitle.title}</Menu.Item>
        ))}
      </Menu>
      <Menu vertical>
        <Menu.Item>İstanbul</Menu.Item>
        <Menu.Item>Ankara</Menu.Item>
        <Menu.Item>İzmir</Menu.Item>
      </Menu>
      <Menu vertical>
        <Menu.Item name="Some Other Category" />
      </Menu>
    </div>
  );
}
