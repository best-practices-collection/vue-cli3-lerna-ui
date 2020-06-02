/* 布局 */
import Row from '@zoro/row'
import Col from '@zoro/col'

/* 基础组件 */
import Quote from '@zoro/quote'
import Code from '@zoro/code'
import  { Btn, BtnGroup } from '@zoro/button/index'
import { Table, TableColumn } from '@zoro/table'
import Pagination from '@zoro/pagination'
import { Radio, RadioBtn, RadioGroup } from '@zoro/radio'
import { Checkbox, CheckboxBtn, CheckboxGroup } from '@zoro/checkbox'
import Select from '@zoro/select'
import Input from '@zoro/input'
import Alert from '@zoro/alert'
import Tooltip from '@zoro/tooltip'
import { Tag, TagGroup } from '@zoro/tag'
import Snackbar from '@zoro/snackbar'
import Toast from '@zoro/toast'

/* 弹框 */
import Poper from '@zoro/poper'
import Dialog from '@zoro/dialog'

/* 复合组件 */
import { Dropdown, DropdownItem } from '@zoro/dropdown'
import { Nav, NavItem } from '@zoro/nav'

/* 动画 */
import Particle from '@zoro/particle'

const components = [
  Row,
  Col,

  Quote,
  Code,
  Btn,
  BtnGroup,
  TableColumn,
  Table,
  Pagination,
  Radio,
  RadioBtn,
  RadioGroup,
  Checkbox,
  CheckboxBtn,
  CheckboxGroup,
  Input,
  Select,
  Alert,
  Tooltip,
  Tag,
  TagGroup,

  Poper,
  Dialog,

  Dropdown,
  DropdownItem,
  Nav,
  NavItem,

  Particle
]

export default {
  install (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })

    Vue.prototype.$snackbar = Snackbar
    Vue.prototype.$toast = Toast
  }
}
