import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import { HookedConsole } from 'console-feed/lib/definitions/Console'

import "./logs.module.scss";

const Logs = () => {
  const [logs, setLogs] = useState([]);

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

  return <div className='logs'><Console logs={logs} variant={"dark"} /></div>
}

export { Logs }
