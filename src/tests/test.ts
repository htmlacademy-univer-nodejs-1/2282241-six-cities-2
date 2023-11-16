import {test, beforeAll, afterAll} from 'vitest';
import {createRestApplicationContainer} from "../app/rest.container";
import Application from "../app/rest";

const container = createRestApplicationContainer();
const app = container.get(Application)
beforeAll(()=>{
  app.init();
});
afterAll(()=>{
  app.init();
});
test('должен всегда выполняться', (tc) => {
  tc.expect(true).toBe(true);
});
test('/offers', async (tc) => {
  const response = await fetch('http://localhost:4000/offers');

  tc.expect(response.ok).toBeTruthy();
  tc.expect(response.headers);
  tc.expect(await response.json()).toStrictEqual({});
});


