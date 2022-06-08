import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import { useColorMode } from '@docusaurus/theme-common';
import { HookedConsole } from 'console-feed/lib/definitions/Console'

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const { colorMode } = useColorMode();

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

  return <Console logs={logs} variant={colorMode} />
}

export { Logs }
