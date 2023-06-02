#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdKec2Stack } from '../lib/cd_kec2-stack';
require('dotenv').config({path: './.env'})


const app = new cdk.App();
new CdKec2Stack(app, 'CdKec2Stack', {
  stackName: 'CdKec2Stack',
  env: {
    region: process.env.REGION ,
    account: process.env.ACCOUNT
  }
});