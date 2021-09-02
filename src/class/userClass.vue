

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
    userCreateDay:Date;
	userName:String;
	userEmail:String;
	userPassword:String;
	userPhone:String;
	userAddress:String;
	userAvt:String;
	userGender:String;
	userBirth:String;
	userRole:String;
    constructor () {
      super();
        this.userCreateDay= new Date;
        this.userEmail= 'NoEmail';
        this.userPhone= '0123456789';
        this.userAddress= 'Ha Noi - Viet nam';
        this.userAvt= 'img.png';
        this.userGender= 'Men';
        this.userBirth= '01/01/2001';
        this.userRole= 'copper';
    }
}
</script>
