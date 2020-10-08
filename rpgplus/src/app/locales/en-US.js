const en = {

    //login
    appBarLogin: 'Login',
    loginTitle: 'Welcome!',
    loginSubtitle: 'Please, Sign In to continue',
    loginEmail: 'E-mail',
    loginPassword: 'Password',
    loginBtnLogin: 'Login',
    loginBtnFirstTimeHere: 'First time here?',
    loginBtnRegister: 'Register an account',
    loginBtnForgotPassword: 'Forgot your password?',
    
    //forgot password
    appBarForgot: 'Forgot Password',
    forgotTitle: 'Forgot Password',
    forgotSubtitle: 'Type below your e-mail to recover your password.',
    forgotEmail: 'E-mail',
    forgotInput: 'Your e-mail here...',
    forgotBtnPassword: 'Reset Password',
    
    //register account
    appBarRegister: 'Register',
    registerTitle: 'Register',
    registerSubtitle: 'Register your account!',
    registerName: 'Name',
    registerNickname: 'Nickname',
    registerEmail: 'E-mail',
    registerPassword: 'Password',
    registerConfirmPassword: 'Confirm your password',   
    registerBtnRegister: 'Register',

    //drawer navigator
    drawerMain: 'Main',
    drawerHome: 'Home',
    drawerTools: 'Tools',
    drawerNameGenerator: 'Name Generator',
    drawerRollDices: 'Roll Dices',
    drawerCreateDraft: 'Create Draft',
    drawerMyDrafts: 'My Drafts',
    drawerSettings: 'Settings',
    drawerPreferences: 'Preferences',
    drawerSignOut: 'Sign Out',

    //home page
    appBarHome: 'Home',
    homeTitle: 'Welcome!',
    homeSubtitle: 'Thank you for using RPG+! Please, select the menu at the upper left corner and check out all the available tools.',

    //name generator
    appBarGenerate: 'Name Generator',
    generatorTitle: 'Name Generator',
    generatorSubtitle: 'Select a category and press the button to generate random names, you can copy it to your clipboard by clicking on it.',
    generatorBtnGenerate: 'Generate Name',

    //roll dices
    appBarRollDices: 'Roll Dices',
    rollTitle: 'Roll Dices',
    rollSubtitle: 'Please, select the type of the dice, quantity of dices to be rolled and the modifier.',
    rollType: 'Type',
    rollQuantity: 'Quantity',
    rollModifier: 'Modifier',
    rollCountingDices: 'º dice: ',
    rollSum: 'Sum of values: ',
    rollBtnRoll: 'Roll',
    rollMaxAllowed: 'Max. dices to roll: 5',

    //create draft
    appBarCreateDraft: 'New Draft',
    createDraftTitle: 'Create a draft for your campaign!',
    createDraftSubtitle: 'You can create 10 drafts.',
    createDraftName: 'Name',
    createDraftNamePlaceholder: 'Dance of the Dragons...',
    createDraftCategory: 'Category',
    createDraftCategoryPlaceholder: 'Medieval...',
    createDraftSystem: 'System',
    createDraftSystemPlaceholder: 'D&D',
    createDraftTextBox: 'Text',
    createDraftTextBoxPlaceholder: 'Everything begins when the cells from the Black Tower explodes, releasing all the prisoners, ...',
    createDraftBtnCreate: 'Create',

    //preferences
    appBarPreferences: 'My Preferences',
    preferencesName: 'Name',
    preferencesEmail: 'E-mail',
    preferencesBtnSaveChanges: 'Save Changes',
    preferencesBtnDeleteAccount: 'Delete Account',
    preferencesEditableProfile: 'Edit Profile',

    //list draft
    appBarListDrafts: 'My Drafts',
    listDraftsName: 'Name',
    listDraftsCategory: 'Category',
    listDraftsSystem: 'System',
    listDraftsText: 'Text',
    listDraftNoDrafts: 'It seems that you have no drafts here.',

    //draft edit
    appBarDraftModel: 'Edit Draft',
    editDraftName: 'Name',
    editDraftCategory: 'Category',
    editDraftSystem: 'System',
    editDraftText: 'Text',
    editDraftLoading: 'Loading...',
    editDraftBtnSaveChanges: 'Save Changes',
    editDraftBtnDeleteDraft: 'Delete Draft',

    //------------------------------------
    //ALERTS AND TOASTS

    //common alerts
    alertCommonTitle: 'Alert',
    alertCatchError: 'Something went wrong: ',
    alertConfirm: 'OK',
    alertCancel: 'Cancel',

    //create draft
    alertCreateDraftAllFields: 'All fields must be filled.',
    alertCreateDraftReachedMaximum: 'You have reached the maximum number of drafts allowed. You will have to delete at least one draft to continue.',
    toastCreateDraftCreated: 'Draft created!',

    //draft model
    toastDraftEditUpdated: 'Draft updated!',
    toastDraftEditDeleted: 'Draft deleted!',
    alertDraftEditTitle: 'Delete Draft',
    alertDraftEditMessage: 'Are you sure you want to delete your draft?',
    toastDraftEditCanceled: 'Delete canceled',
    alertDraftEditNoExist: 'No docs here.',

    //forgot password
    toastForgotPasswordDone: 'Done, please check your e-mail.',

    //login
    alertTitleLoginFillFields: 'Empty fields',
    alertLoginFillFields: 'Please, fill all the fields.',
    toastLoginSuccess: 'Successfully logged.',

    //dealing with firebase exceptions
    alertTitleUserNotFound: 'User not found',
    alertUserNotFound: 'We could not find the user with this e-mail.',

    alertTitleInvalidEmail: 'Invalid e-mail',
    alertInvalidEmail: 'You have to use a valid e-mail.',
    
    alertTitleEmailInUse: 'E-mail in use',
    alertEmailInUse: 'This e-mail is already in use!',
    
    alertTitleWeakPassword: 'Weak password',
    alertWeakPassword: 'Your password has to be at least 6 characters.',

    alertTitleRecentLogin: 'Recent log-in required',
    alertRecentLogin: 'For your security, you will have to log-in again to continue.',

    //name generator
    toastNameGeneratorCopied: 'copied to your clipboard.',

    //preferences
    alertTitlePreferencesPermissions: 'Permission denied',
    alertPreferencesPermissions: 'Sorry, we need camera roll permissions to make this work!',
    toastPreferencesImageAdded: 'Image added.',
    toastPreferencesImageSaved: 'Image saved.',
    toastPreferencesNameUpdated: 'Name updated.',
    toastPreferencesEmailUpdated: 'E-mail updated.',
    alertPreferencesTitle: 'Delete user',
    alertPreferencesMessage: 'Are you sure you want to delete your account? This cannot be undone.',
    toastPreferencesUserDeleted: 'User deleted!',
    toastPreferencesDeleteCancel: 'Delete canceled.',

    //register
    alertRegisterTitleFillFields: 'Empty fields',
    alertRegisterFillFields: 'You have to fill all the fields!',
    alertRegisterTitlePassword: 'Password conflict',
    alertRegisterPassword: 'Password and Confirm Password fields cannot be different!',
    toastRegisterSuccess: 'Successfully Registered!',

    //roll dices
    alertRollQuantity: 'The quantity must be a value between 1 and 5.',
    alertRollModifier: 'The modifier must be a value between -30 and 30.',

    //drawer content
    alertLogoutTitle: 'Logout',
    alertLogoutMessage: 'Are you sure you want to logout?',
    alertLogoutCanceled: 'Logout canceled.',
    alertLogoutSuccessful: 'Successfully logged out!',
    
};
  
export default en;