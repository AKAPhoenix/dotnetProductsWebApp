/* import express, { Router } from 'express';
import path from 'path';
 */
const express=require('express');
const path=require('path');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const axios=require('axios');
const https=require('https');
const fs=require('fs');
const mysql=require('mysql');
const request=require('request');

const app = express();
const router= express.Router();

const dependencies={
    express:express,
    path:path,
    router:router,
    app:app,
    cheerio:cheerio,
    puppeteer:puppeteer,
    axios:axios,
    https:https,
    request:request,
    fs:fs,
    mysql:mysql
  }
  //console.log('from dependencies '+dependencies.router);

  module.exports=dependencies