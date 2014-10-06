import os
import json
from flask import Flask, request, Response
from flask import render_template, send_from_directory, url_for
from flask.ext.cors import CORS

app = Flask(__name__)
cors = CORS(app)

app.config.from_object('main.settings')

app.url_map.strict_slashes = False

import main.core
import main.models
import main.controllers

