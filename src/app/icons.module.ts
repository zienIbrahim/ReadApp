import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faFacebookSquare, faLinkedin, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faCheckCircle, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import {
   faArrowCircleDown,
   faArrowCircleUp, faArrowLeft, faArrowRight, faCar,faPlane,
   faCheck, faCheckDouble,
   faCheckSquare, faClipboardList, faCreditCard,
   faExclamationTriangle, faEye,
   faEyeSlash,
   faFileInvoice,
   faFileUpload, faGlobeAfrica, faHome, faLayerGroup,faHospital,
   faListAlt,
   faMinusCircle, faMoneyBill, faMoneyCheck, faMoneyCheckAlt,
   faPlus, faPlusCircle,
   faQuestion, faRedo,
   faSignInAlt,
   faSignOutAlt,
   faTimes,
   faTrash, faUser,
   faUserCheck,
   faUserCog,faEdit, faDownload, faPrint, faSyncAlt, faPencilAlt, faBlog,
} from '@fortawesome/free-solid-svg-icons';


@NgModule({
   declarations: [],
   imports: [
      CommonModule,
      FontAwesomeModule
   ],
   exports: [
      FontAwesomeModule
   ]
})
export class IconsModule {
   constructor(library: FaIconLibrary) {
      library.addIcons(
         faUser,
         faCar,
         faPlane,
         faCreditCard,
         faLayerGroup,
         faRedo,
         faCalendarAlt,
         faEye,
         faEyeSlash,
         faSignInAlt,
         faSignOutAlt,
         faUserCheck,
         faCheckCircle,
         faCheckDouble,
         faHome,
         faHospital,
         faGlobeAfrica,
         faQuestionCircle,
         faMoneyCheckAlt,
         faFileInvoice,
         faFacebookSquare,
         faYoutube,
         faTwitterSquare,
         faLinkedin,
         faListAlt,
         faArrowCircleDown,
         faArrowCircleUp,
         faArrowRight,
         faTimes,
         faClipboardList,
         faMoneyCheck,
         faCar,
         faFileInvoice,
         faFileUpload,
         faQuestion,
         faUserCog,
         faPlus,
         faArrowRight,
         faArrowLeft,
         faExclamationTriangle,
         faCheckSquare,
         faPlusCircle,
         faMinusCircle,
         faCheck,
         faTrash,
         faRedo,
         faMoneyCheckAlt,faEdit,faDownload,faPencilAlt,faFacebook,faUser,faBlog,faSignOutAlt,
         faPrint,faHome,
         faSyncAlt
      );
   }
}
