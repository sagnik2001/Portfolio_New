import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import {Row} from "react-bootstrap"
function Github() {
  const colourTheme = {
    background: "transparent",

    text: "#ffffff",
    //      grade4: "#ecd9fc",
    // grade3: "#b22ff4",
    // grade2: "#b265f6",
    // grade1: "#c084f5",

    // grade0: "#8400b8",
    dark:["#ecd9fc","#b22ff4","#b265f6","#c084f5","8400b8"]
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Contribute</strong> to Github
      </h1>
      <GitHubCalendar
        username="sagnik2001"
        blockSize={18}
        blockMargin={6}
        theme={colourTheme}
        fontSize={16}
        colorScheme='dark'
      />
    </Row>
  );
}

export default Github;
