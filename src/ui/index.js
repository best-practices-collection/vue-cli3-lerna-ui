/* 布局 */
import Row from '@aoping/row';
import Col from '@aoping/col';

/* 基础组件 */
import Quote from '@aoping/quote';
import Code from '@aoping/code';
import { Btn, BtnGroup } from '@aoping/button/index';
import { Table, TableColumn } from '@aoping/table';
import Pagination from '@aoping/pagination';
import { Radio, RadioBtn, RadioGroup } from '@aoping/radio';
import { Checkbox, CheckboxBtn, CheckboxGroup } from '@aoping/checkbox';
import Select from '@aoping/select';
import Input from '@aoping/input';
import Alert from '@aoping/alert';
import Tooltip from '@aoping/tooltip';
import { Tag, TagGroup } from '@aoping/tag';
import Snackbar from '@aoping/snackbar';
import Toast from '@aoping/toast';

/* 弹框 */
import Poper from '@aoping/poper';
import Dialog from '@aoping/dialog';

/* 复合组件 */
import { Dropdown, DropdownItem } from '@aoping/dropdown';
import { Nav, NavItem } from '@aoping/nav';

/* 动画 */
import Particle from '@aoping/particle';

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

  Particle,
];

export default {
  install(Vue) {
    components.map(component => {
      Vue.component(component.name, component);
    });

    Vue.prototype.$snackbar = Snackbar;
    Vue.prototype.$toast = Toast;
  },
};
