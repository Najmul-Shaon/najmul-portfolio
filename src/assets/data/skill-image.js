import adobeXd from '../svg/skills/adobe-xd.svg';
import adobeaudition from '../svg/skills/adobeaudition.svg';
import afterEffects from '../svg/skills/after-effects.svg';
import angular from '../svg/skills/angular.svg';
import aws from '../svg/skills/aws.svg';
import azure from '../svg/skills/azure.svg';
import blender from '../svg/skills/blender.svg';
import bootstrap from '../svg/skills/bootstrap.svg';
import bulma from '../svg/skills/bulma.svg';
import c from '../svg/skills/c.svg';
import canva from '../svg/skills/canva.svg';
import capacitorjs from '../svg/skills/capacitorjs.svg';
import coffeescript from '../svg/skills/coffeescript.svg';
import cplusplus from '../svg/skills/cplusplus.svg';
import csharp from '../svg/skills/csharp.svg';
import css from '../svg/skills/css.svg';
import dart from '../svg/skills/dart.svg';
import deno from '../svg/skills/deno.svg';
import django from '../svg/skills/django.svg';
import docker from '../svg/skills/docker.svg';
import fastify from '../svg/skills/fastify.svg';
import figma from '../svg/skills/figma.svg';
import firebase from '../svg/skills/firebase.svg';
import flutter from '../svg/skills/flutter.svg';
import gcp from '../svg/skills/gcp.svg';
import gimp from '../svg/skills/gimp.svg';
import git from '../svg/skills/git.svg';
import go from '../svg/skills/go.svg';
import graphql from '../svg/skills/graphql.svg';
import haxe from '../svg/skills/haxe.svg';
import html from '../svg/skills/html.svg';
import illustrator from '../svg/skills/illustrator.svg';
import ionic from '../svg/skills/ionic.svg';
import java from '../svg/skills/java.svg';
import javascript from '../svg/skills/javascript.svg';
import julia from '../svg/skills/julia.svg';
import kotlin from '../svg/skills/kotlin.svg';
import lightroom from '../svg/skills/lightroom.svg';
import markdown from '../svg/skills/markdown.svg';
import materialui from '../svg/skills/materialui.svg';
import matlab from '../svg/skills/matlab.svg';
import memsql from '../svg/skills/memsql.svg';
import microsoftoffice from '../svg/skills/microsoftoffice.svg';
import mongoDB from '../svg/skills/mongoDB.svg';
import mysql from '../svg/skills/mysql.svg';
import nextJS from '../svg/skills/nextJS.svg';
import nginx from '../svg/skills/nginx.svg';
import numpy from '../svg/skills/numpy.svg';
import nuxtJS from '../svg/skills/nuxtJS.svg';
import opencv from '../svg/skills/opencv.svg';
import photoshop from '../svg/skills/photoshop.svg';
import php from '../svg/skills/php.svg';
import picsart from '../svg/skills/picsart.svg';
import postgresql from '../svg/skills/postgresql.svg';
import premierepro from '../svg/skills/premierepro.svg';
import python from '../svg/skills/python.svg';
import pytorch from '../svg/skills/pytorch.svg';
import react from '../svg/skills/react.svg';
import ruby from '../svg/skills/ruby.svg';
import selenium from '../svg/skills/selenium.svg';
import sketch from '../svg/skills/sketch.svg';
import strapi from '../svg/skills/strapi.svg';
import svelte from '../svg/skills/svelte.svg';
import swift from '../svg/skills/swift.svg';
import tailwind from '../svg/skills/tailwind.svg';
import tensorflow from '../svg/skills/tensorflow.svg';
import typescript from '../svg/skills/typescript.svg';
import unity from '../svg/skills/unity.svg';
import vitejs from '../svg/skills/vitejs.svg';
import vue from '../svg/skills/vue.svg';
import vuetifyjs from '../svg/skills/vuetifyjs.svg';
import webix from '../svg/skills/webix.svg';
import wolframalpha from '../svg/skills/wolframalpha.svg';
import wordpress from '../svg/skills/wordpress.svg';
import pandas from '../svg/skills/pandas.svg';
import scikitlearn from '../svg/skills/scikit-learn.svg';
import dotnet from '../svg/skills/dotnet.svg';
import dotnetcore from '../svg/skills/dotnetcore.svg'
import kubernetes from '../svg/skills/kubernetes.svg'
import linux from '../svg/skills/linux.svg'
import sqlalchemy from '../svg/skills/sqlalchemy.svg'
import fastapi from '../svg/skills/fastapi.svg'


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'fastapi':
      return fastapi;
    default:
      break;
  }
}
