import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import { HookedConsole } from 'console-feed/lib/definitions/Console'

import "./consoleL.module.scss";

const defaultStyles = {
  BASE_FONT_SIZE: "15px"
}

const ConsoleL = ({ styles = defaultStyles }) => {
  const [consoleL, setLogs] = useState([]);

  useEffect(() => {
    setLogs([{
      method: 'log',
      data: ["Welcome to the console!"]
    }]);
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]), //@ts-ignore
      false
    )
    const windowConsoleRef: HookedConsole extends Console ? Console : any = window.console;
    return () => { Unhook(windowConsoleRef) }
  }, [])

  return <div className='consoleL'><Console logs={consoleL} variant={"dark"} styles={styles} /></div>
}

export { ConsoleL }
