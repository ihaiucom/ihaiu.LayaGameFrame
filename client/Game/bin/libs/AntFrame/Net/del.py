#!/usr/bin/python
# -*- coding:utf-8 -*-

import  os
import sys
import json
import codecs

buf = []
fp = open("proto.d.ts","r+")
flag = False
for line in fp:
    tmp = line
    if line.find("*")> 0:
        if line.startswith("import"):
            buf.append(line)
        continue

    if line.find("public static create")> 0:
        #buf.append(line)
        flag = True

    if flag == True:
        if line.startswith("}"):
            flag = False

    if flag == False:
        buf.append(line)

fp.seek(0,0)
fp.truncate()
for i in buf:
    fp.write(i)

