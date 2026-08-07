import adobeXd from "../svg/skills/adobe-xd.svg";
import adobeaudition from "../svg/skills/adobeaudition.svg";
import afterEffects from "../svg/skills/after-effects.svg";
import angular from "../svg/skills/angular.svg";
import aws from "../svg/skills/aws.svg";
import azure from "../svg/skills/azure.svg";
import blender from "../svg/skills/blender.svg";
import bootstrap from "../svg/skills/bootstrap.svg";
import bulma from "../svg/skills/bulma.svg";
import c from "../svg/skills/c.svg";
import canva from "../svg/skills/canva.svg";
import capacitorjs from "../svg/skills/capacitorjs.svg";
import coffeescript from "../svg/skills/coffeescript.svg";
import cplusplus from "../svg/skills/cplusplus.svg";
import csharp from "../svg/skills/csharp.svg";
import css from "../svg/skills/css.svg";
import dart from "../svg/skills/dart.svg";
import deno from "../svg/skills/deno.svg";
import django from "../svg/skills/django.svg";
import docker from "../svg/skills/docker.svg";
import fastify from "../svg/skills/fastify.svg";
import figma from "../svg/skills/figma.svg";
import firebase from "../svg/skills/firebase.svg";
import flutter from "../svg/skills/flutter.svg";
import gcp from "../svg/skills/gcp.svg";
import gimp from "../svg/skills/gimp.svg";
import git from "../svg/skills/git.svg";
import go from "../svg/skills/go.svg";
import graphql from "../svg/skills/graphql.svg";
import haxe from "../svg/skills/haxe.svg";
import html from "../svg/skills/html.svg";
import illustrator from "../svg/skills/illustrator.svg";
import ionic from "../svg/skills/ionic.svg";
import java from "../svg/skills/java.svg";
import javascript from "../svg/skills/javascript.svg";
import julia from "../svg/skills/julia.svg";
import kotlin from "../svg/skills/kotlin.svg";
import lightroom from "../svg/skills/lightroom.svg";
import markdown from "../svg/skills/markdown.svg";
import materialui from "../svg/skills/materialui.svg";
import matlab from "../svg/skills/matlab.svg";
import memsql from "../svg/skills/memsql.svg";
import microsoftoffice from "../svg/skills/microsoftoffice.svg";
import mongoDB from "../svg/skills/mongoDB.svg";
import mysql from "../svg/skills/mysql.svg";
import nextJS from "../svg/skills/nextJS.svg";
import nginx from "../svg/skills/nginx.svg";
import numpy from "../svg/skills/numpy.svg";
import nuxtJS from "../svg/skills/nuxtJS.svg";
import opencv from "../svg/skills/opencv.svg";
import photoshop from "../svg/skills/photoshop.svg";
import php from "../svg/skills/php.svg";
import picsart from "../svg/skills/picsart.svg";
import postgresql from "../svg/skills/postgresql.svg";
import premierepro from "../svg/skills/premierepro.svg";
import python from "../svg/skills/python.svg";
import pytorch from "../svg/skills/pytorch.svg";
import react from "../svg/skills/react.svg";
import ruby from "../svg/skills/ruby.svg";
import selenium from "../svg/skills/selenium.svg";
import sketch from "../svg/skills/sketch.svg";
import strapi from "../svg/skills/strapi.svg";
import svelte from "../svg/skills/svelte.svg";
import swift from "../svg/skills/swift.svg";
import tailwind from "../svg/skills/tailwind.svg";
import tensorflow from "../svg/skills/tensorflow.svg";
import typescript from "../svg/skills/typescript.svg";
import unity from "../svg/skills/unity.svg";
import vitejs from "../svg/skills/vitejs.svg";
import vue from "../svg/skills/vue.svg";
import vuetifyjs from "../svg/skills/vuetifyjs.svg";
import webix from "../svg/skills/webix.svg";
import wolframalpha from "../svg/skills/wolframalpha.svg";
import wordpress from "../svg/skills/wordpress.svg";
import pandas from "../svg/skills/pandas.svg";
import scikitlearn from "../svg/skills/scikit-learn.svg";
import dotnet from "../svg/skills/dotnet.svg";
import dotnetcore from "../svg/skills/dotnetcore.svg";
import kubernetes from "../svg/skills/kubernetes.svg";
import linux from "../svg/skills/linux.svg";
import sqlalchemy from "../svg/skills/sqlalchemy.svg";
import fastapi from "../svg/skills/fastapi.svg";
import express from "../svg/skills/express.svg";
import nodejs from "../svg/skills/nodejs.svg";
import github from "../svg/skills/github.svg";
import postman from "../svg/skills/postman.svg";
import axios from "../svg/skills/axios.svg";
import framermotion from "../svg/skills/framermotion.svg";
import claude from "../svg/skills/claude.svg";
import chatgpt from "../svg/skills/chatgpt.svg";
import githubCopilot from "../svg/skills/githubCopilot.svg";
import gemini from "../svg/skills/gemini.svg";
import kimi from "../svg/skills/kimi.svg";
import shopify from "../svg/skills/shopify.svg";
import elementor from "../svg/skills/elementor.svg";
import prisma from "../svg/skills/prisma.svg";
import laravel from "../svg/skills/laravel.svg";

// Normalizes a skill/tool name to a lookup key: lowercase, with spaces, dots,
// hyphens and "js" suffixes stripped so "React", "ReactJS", "react.js" and
// "React JS" all resolve to the same logo. "+" and "#" are kept for c++ / c#.
const normalize = (name = "") =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9+#]/g, "")
    .replace(/js$/, "");

// Each entry is keyed by its normalized name; add aliases by listing several
// keys that map to the same asset.
const SKILL_IMAGE_MAP = {
  gcp,
  axios,
  framermotion,
  html,
  postman,
  express,
  github,
  githubcopilot: githubCopilot,
  node: nodejs,
  photoshop,
  docker,
  illustrator,
  adobexd: adobeXd,
  aftereffects: afterEffects,
  css,
  angular,
  javascript,
  next: nextJS,
  nuxt: nuxtJS,
  react,
  svelte,
  typescript,
  vue,
  bootstrap,
  bulma,
  capacitor: capacitorjs,
  coffeescript,
  memsql,
  mongodb: mongoDB,
  mysql,
  postgresql,
  tailwind,
  tailwindcss: tailwind,
  vite: vitejs,
  vuetify: vuetifyjs,
  c,
  "c++": cplusplus,
  "c#": csharp,
  dart,
  go,
  java,
  kotlin,
  julia,
  matlab,
  php,
  python,
  ruby,
  swift,
  adobeaudition,
  aws,
  deno,
  django,
  firebase,
  gimp,
  git,
  graphql,
  lightroom,
  materialui,
  nginx,
  numpy,
  opencv,
  premierepro,
  pytorch,
  selenium,
  strapi,
  tensorflow,
  webix,
  wordpress,
  azure,
  blender,
  fastify,
  figma,
  flutter,
  haxe,
  ionic,
  markdown,
  microsoftoffice,
  picsart,
  sketch,
  unity,
  wolframalpha,
  canva,
  pandas,
  sklearn: scikitlearn,
  net: dotnet,
  netcore: dotnetcore,
  kubernetes,
  linux,
  sqlalchemy,
  fastapi,
  claude,
  chatgpt,
  gemini,
  kimi,
  shopify,
  elementor,
  prisma,
  laravel,
};

export const skillsImage = (skill) => SKILL_IMAGE_MAP[normalize(skill)];
