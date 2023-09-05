import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

// Tell a funny joke command
const JOKE_COMMAND = {
  name: 'joke',
  description: 'Tell me a funny knock knock joke',
  type: 1,
};

const ALL_COMMANDS = [TEST_COMMAND, JOKE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);