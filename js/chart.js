new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { month: '2001', value: 120 },
      { month: '2002', value: 100 },
      { month: '2003', value: 160 },
      { month: '2004', value: 100 },
      { month: '2005', value: 20 }
    //   { month: '2022 06 jul', value: 0 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'month',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['value', 'month'],
    xLabels: "year"
  });






