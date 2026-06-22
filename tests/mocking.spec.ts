//import statements for api and web mocking
import { test, expect } from '@playwright/test';
import { APIRequestContext } from '@playwright/test';
import { WebSocket } from 'ws';

import { Request } from "playwright";
await page.routeWebSocket('wss://example.com/ws', ws => {
  ws.onMessage(message => {
    if (message === 'request')
      ws.send('response');
  });
});