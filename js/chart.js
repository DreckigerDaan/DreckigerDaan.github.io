let Insgesamt = document.getElementById('myChart').getContext('2d');
let ctx2 = document.getElementById('myChart2').getContext('2d');
let ctx3 = document.getElementById('myChart3').getContext('2d');
let ctx4 = document.getElementById('myChart4').getContext('2d');
let ctx5 = document.getElementById('myChart5').getContext('2d');




let aaInsgesamt = document.getElementById('aamyChart').getContext('2d');
let aactx2 = document.getElementById('aamyChart2').getContext('2d');
let aactx3 = document.getElementById('aamyChart3').getContext('2d');
let aactx4 = document.getElementById('aamyChart4').getContext('2d');
let aactx5 = document.getElementById('aamyChart5').getContext('2d');


let colorHex = ['#981400'  , '#805f5f']


let myChart = new Chart(Insgesamt, {
    type: 'pie',
    data: {
        datasets: [{
            data: [81 , 19],
            backgroundColor: colorHex
        }],
    },
    options: {
        maintainAspectRatio: false,
        elements: {
                arc: {
                    borderWidth: 0,
            }
        },
        tooltips:{
            enabled: false
            }

        },

})


let myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        datasets: [{
            data: [77   , 23 ],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
            enabled: false
            }
    },
    

})

let myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        datasets: [{
            data: [88   , 12 ],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
            enabled: false
            }
    },
    

})



let myChart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        datasets: [{
            data: [98   , 2 ],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
        enabled: false
        }
    },
    

})

 let myChart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        datasets: [{
            data: [ 89  ,  11],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
            enabled: false
            }
    },
    

}) 





/* --- 2018 ---*/

let aamyChart = new Chart(aaInsgesamt, {
    type: 'pie',
    data: {
        datasets: [{
            data: [81 , 19],
            backgroundColor: colorHex
        }],
    },
    options: {
        maintainAspectRatio: false,
        elements: {
                arc: {
                    borderWidth: 0,
            }
        },
        tooltips:{
            enabled: false
            }

        },

})


let aamyChart2 = new Chart(aactx2, {
    type: 'pie',
    data: {
        datasets: [{
            data: [79   , 21 ],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
            enabled: false
            }
    },
    

})

let aamyChart3 = new Chart(aactx3, {
    type: 'pie',
    data: {
        datasets: [{
            data: [89   , 11 ],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
            enabled: false
            }
    },
    

})



let aamyChart4 = new Chart(aactx4, {
    type: 'pie',
    data: {
        datasets: [{
            data: [98   , 2 ],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
        enabled: false
        }
    },
    

})

 let aamyChart5 = new Chart(aactx5, {
    type: 'pie',
    data: {
        datasets: [{
            data: [ 90  ,  10],
            backgroundColor: colorHex
        }],
        //labels : labels
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        tooltips:{
            enabled: false
            }
    },
    

}) 

    






