new Vue({
  el: '#kanban',
  data: {
    newLeftPlateName: '',
    newCenterPlateName: '',
    newRightPlateName: '',
    leftPlates: [],
    centerPlates: [],
    rightPlates: [],
    
  },
  methods: {
    addNewLeftPlate: function() {
      this.leftPlates.push(this.newLeftPlateName)
      this.newLeftPlateName = ''
    },
    addNewCenterPlate: function() {
        this.centerPlates.push(this.newCenterPlateName)
        this.newCenterPlateName = ''
      },
    addNewRightPlate: function() {
        this.rightPlates.push(this.newRightPlateName)
        this.newRightPlateName = ''
      },
  }
})