import trainService from '../../api/train-service'
import consultService from '../../api/consult-service'

export default {
  data() {
    return {
      id: '',
      train: null,
      active: 0,
      tabs: [
        {
          id: 0,
          name: '线路详情'
        },
        {
          id: 1,
          name: '在线留言'
        }
      ],
      infomation: {
        name: '',
        phone: '',
        email: '',
        consultInfo: ''
      }
    }
  },

  created() {
    this.id = this.$route.params.id || ''
    this.infomation.trainId = this.id
    this.getData()
  },

  computed: {},

  mounted() {},

  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },

    async getData() {
      const { data } = await trainService.getTrainDetail({ id: this.id })
      this.train = data || null
    },

    async submit() {
      if (!this.infomation.name) {
        this.$toast.fail('请输入姓名')
        return
      }
      if (!this.infomation.phone) {
        this.$toast.fail('请输入手机号')
        return
      }
      if (!this.infomation.consultInfo) {
        this.$toast.fail('请输入留言内容')
        return
      }
      await consultService.addConsult(this.infomation)
      this.$toast.success('客服将会在一个工作日内联系您，请注意电话畅通！')
    }
  }
}
