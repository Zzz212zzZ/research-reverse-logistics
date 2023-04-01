

export const option_left_1 = {

  legend: {
    data: ['全国平均', '本省评价'],
    textStyle: {
      color: '#ffffff', // 修改为白色
    },
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '资源利用率', max: 100 },
      { name: '信息集成能力', max: 100 },
      { name: '网络覆盖范围', max: 100 },
      { name: '应用用户数量', max: 100 },
      { name: '解决方案质量', max: 100 },
      { name: '环保拆解效率', max: 100 }
    ]
  },
  series: [
    {
      type: 'radar',
      lineStyle: {
        width: 3, // 设置线条宽度
      },
      data: [
        {
          value: [100*0.85, 100*0.7, 100*0.9, 100*0.65, 100*0.75, 100*0.85],
          name: '全国平均'
        },
        
        {
          value: [100*0.79, 100*0.8, 100*0.79, 100*0.85, 100*0.65, 100*0.75],
          name: '本省评价'
        }
      ]
    }
  ]
};






export const data2 = [
  // BarChart 数据
];


export function generateData_left_2() {
  let category = [];
  let lineData = [];
  let dottedBase = +new Date();
  let barData = [];
  for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
    );
    let b = Math.random() * 19*10 + 50;
    let d = Math.random() * 13*6+5;
    barData.push(b.toFixed(2));
    lineData.push((d + b).toFixed(2));
  }
  return { category, lineData, barData };
}

const { category, lineData, barData } = generateData_left_2();

export const option_left_2 = {
  // backgroundColor: '#0f375f',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['上界', '下界'],
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  series: [
    {
      name: '上界',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 15,
      data: lineData
    },
    {
      name: '下界',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        borderRadius: 5,
      },
      data: barData
    },
    {
      name: '上界',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
      },
      z: -12,
      data: lineData
    },
    {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        color: '#0f375f'
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData
    }
  ]
};

export function generateData_right_1() {
  const categories = ['废旧手机', 'CRT电视', '洗衣机', '液晶电视', '台式电脑', '电冰箱', '空调', '笔记本电脑', '人力分配'];


  const dataDict = {};
  let totalSum = 0;
  const multiSpecialDevice = 1.5;
  const multiSpecialDay = 2.3;

  for (let category of categories) {
    let data = [];
    let base = Math.random() * 50 ;
    let multiplier = category === '废旧手机' || category === '洗衣机' || category === '液晶电视' || category === '笔记本电脑' ? multiSpecialDevice : 1;
    for (let day = 0; day < 7; day++) {
      if (day === 4 || day === 5) {
        data.push(Math.round(base + Math.random() * 100  * multiSpecialDay * multiplier));
      } else {
        data.push(Math.round(base + Math.random() * 100  * multiplier));
      }
      base += 50 * 1;
    }
    dataDict[category] = data;
    totalSum += data.reduce((acc, cur) => acc + cur);
  }

  let sumPerDay = [0, 0, 0, 0, 0, 0, 0];
  for (let day = 0; day < 7; day++) {
    for (let category of categories) {
      if (category !== '人力分配') {
        sumPerDay[day] += dataDict[category][day];
      }
    }
  }

  // 分配人员
  for (let day = 0; day < 7; day++) {
    let allocation = Math.round(sumPerDay[day] * 0.3);
    dataDict['人力分配'][day] = allocation;
  }

  return dataDict;
}


const data_right_1 = generateData_right_1();
console.log(data_right_1['废旧手机']);




export const option_right_1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '废旧手机',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: data_right_1['废旧手机']
    },
    {
      name: 'CRT电视',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: data_right_1['CRT电视']
    },
    {
      name: '洗衣机',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: data_right_1['洗衣机']
    },
    {
      name: '液晶电视',
      type: 'bar',
      data: data_right_1['液晶电视'],
      emphasis: {
        focus: 'series'
      },
    },
    {
      name: '台式电脑',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data_right_1['台式电脑']
    },
    {
      name: '电冰箱',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data_right_1['电冰箱']
    },
    {
      name: '空调',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data_right_1['空调']
    },
    {
      name: '笔记本电脑',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data_right_1['笔记本电脑']
    },
    {
      name: '人力分配',
      type: 'bar',
      color: '#C8EFAF',
      emphasis: {
        focus: 'series'
      },
      markLine: {
        lineStyle: {
          type: 'dashed'
        },
        label: {
          formatter: function (params) {
            // 获取标记线数据
            const lineData = data_right_1['人力分配'];
            // 计算最大值
            const maxValue = Math.max(...lineData);
            // 返回最大值作为文本
            return '最大值：' + maxValue;
          }
        },
        data: [
          [{ type: 'min', data: 'min' },
          { type: 'max', data: 'max' }]
        ]
      },
      data: data_right_1['人力分配']
    }

  ]
};

export const data4 = [
  // RadarChart 数据
];

export function generateData_right_2() { 
  const categories = ['废旧手机', '液晶电视', '台式电脑', '电冰箱', '空调'];
  const valueRanges = [[800, 1500], [1500, 3000], [2000, 3500], [1000, 2000], [1200, 2500]];

  let realDict = {};
  let predictDict = {};

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const [min, max] = valueRanges[i];
    const value = Math.round(Math.random() * (max - min) + min);
    realDict[category] = value;
    predictDict[category] = value + Math.round(value * (Math.random() - 0.5) * 0.1);
  }

  // 对realDict进行排序
  const sortedReal = Object.entries(realDict)
    .sort((a, b) => a[1] - b[1])
    .map(([key, value]) => [key, value]);
  realDict = Object.fromEntries(sortedReal);
  console.log(realDict)

  // 对predictDict按照realDict的顺序排序
  const sortedPredict = Object.entries(predictDict)
    .sort((a, b) => {
      const indexA = sortedReal.findIndex(([key, value]) => key === a[0]);
      const indexB = sortedReal.findIndex(([key, value]) => key === b[0]);
      return indexA - indexB;
    })
    .map(([key, value]) => [key, value]);
  predictDict = Object.fromEntries(sortedPredict);


  return  {realDict, predictDict} ;
}

const {realDict , predictDict } = generateData_right_2();
const right_2_realDict = realDict;
const right_2_predictDict = predictDict;



export const option_right_2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    axisLabel: {
      color: '#fff'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    type: 'category',
    data: Object.keys(right_2_realDict),
    axisLabel: {
      color: '#fff'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  series: [
    {
      name: '预测值',
      type: 'bar',
      data: Object.values(right_2_predictDict),
      itemStyle: {
        color: '#B2A4FF' // 蓝色
      }
    },
    {
      name: '实际值',
      type: 'bar',
      data: Object.values(right_2_realDict),
      itemStyle: {
        color: '#19A7CE' // 绿色
      }
    }
  ]
};
