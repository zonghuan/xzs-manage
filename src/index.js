// 全局样式
import "./widget/common/global.less";

import React from 'react'
import {render} from 'react-dom'
import Frame from './widget/frame'


const content = document.getElementById('content')

render(<Frame />,content)
