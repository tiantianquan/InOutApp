# -*- coding: utf-8 -*-
from main import app
from main.core import db
from main.models import Post
from flask import Response, jsonify
from bson.json_util import loads,dumps


@app.route('/list')
def showlist():
    return Response(dumps(Post.find({"Category": "种子神奇宝贝"})))
