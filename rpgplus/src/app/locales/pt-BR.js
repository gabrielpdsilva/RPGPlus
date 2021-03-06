/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

const pt = {

    //login
    appBarLogin: 'Login',
    loginTitle: 'Bem-vindo!',
    loginSubtitle: 'Por favor, faça Login para continuar',
    loginEmail: 'E-mail',
    loginPassword: 'Senha',
    loginBtnLogin: 'Login',
    loginBtnFirstTimeHere: 'Primeira vez aqui?',
    loginBtnRegister: 'Registre-se',
    loginBtnForgotPassword: 'Esqueceu sua senha?',

    //forgot password
    appBarForgot: 'Esqueceu a Senha',
    forgotTitle: 'Esqueceu a Senha',
    forgotSubtitle: 'Digite abaixo seu e-mail para recuperar sua senha.',
    forgotEmail: 'E-mail',
    forgotInput: 'Digite o e-mail aqui...',
    forgotBtnPassword: 'Resetar Senha',
    
    //register account
    appBarRegister: 'Registrar',
    registerTitle: 'Registrar',
    registerSubtitle: 'Registre sua conta!',
    registerName: 'Nome',
    registerNickname: 'Nickname',
    registerEmail: 'E-mail',
    registerPassword: 'Senha',
    registerConfirmPassword: 'Confirme a senha',   
    registerBtnRegister: 'Registrar',

    //drawer navigator
    drawerMain: 'Principal',
    drawerHome: 'Página Inicial',
    drawerTools: 'Ferramentas',
    drawerNameGenerator: 'Gerador de Nomes',
    drawerRollDices: 'Rolar Dados',
    drawerCreateDraft: 'Criar Rascunho',
    drawerMyDrafts: 'Meus Rascunhos',
    drawerSettings: 'Configurações',
    drawerPreferences: 'Preferências',
    drawerSignOut: 'Sair',

    //home page
    appBarHome: 'Página Inicial',
    homeTitle: 'Bem-vindo!',
    homeSubtitle: 'Obrigado por usar o RPG+! Por favor, selecione o menu no canto superior esquerdo e confira as ferramentas disponíveis.',
    homeAppVersion: 'Versão do app: ',

    //name generator
    appBarGenerate: 'Gerador de Nomes',
    generatorTitle: 'Gerador de Nomes',
    generatorSubtitle: 'Selecione a categoria e pressione o botão pra gerar nomes aleatórios, você pode copiá-los pro seu teclado clicando no nome.',
    generatorBtnGenerate: 'Gerar Nome',

    //roll dices
    appBarRollDices: 'Rolar Dados',
    rollTitle: 'Rolar Dados',
    rollSubtitle: 'Por favor, selecione o tipo de dado, quantidade de dados a serem jogados e o modificador.',
    rollType: 'Tipo',
    rollQuantity: 'Quantidade',
    rollModifier: 'Modificador',
    rollCountingDices: 'º dado: ',
    rollSum: 'Soma dos valores: ',
    rollBtnRoll: 'Rolar Dados',
    rollMaxAllowed: 'Máximo de dados permitidos: 5',

    //create draft
    appBarCreateDraft: 'Novo Rascunho',
    createDraftTitle: 'Crie um rascunho pra sua campanha!',
    createDraftSubtitle: 'Você pode criar até 10 rascunhos.',
    createDraftName: 'Nome',
    createDraftNamePlaceholder: 'Dança dos Dragões...',
    createDraftCategory: 'Categoria',
    createDraftCategoryPlaceholder: 'Medieval...',
    createDraftSystem: 'Sistema',
    createDraftSystemPlaceholder: 'D&D...',
    createDraftTextBox: 'Texto',
    createDraftTextBoxPlaceholder: 'Tudo começa quando as celas da Torre Negra explodem e liberam os prisioneiros, ...',
    createDraftBtnCreate: 'Criar',

    //preferences
    appBarPreferences: 'Minhas Preferências',
    preferencesName: 'Nome',
    preferencesEmail: 'E-mail',
    preferencesBtnSaveChanges: 'Salvar Mudanças',
    preferencesBtnDeleteAccount: 'Deletar Conta',

    //list draft
    appBarListDrafts: 'Meus Rascunhos',
    listDraftsName: 'Nome',
    listDraftsCategory: 'Categoria',
    listDraftsSystem: 'Sistema',
    listDraftsText: 'Texto',
    listDraftNoDrafts: 'Parece que você ainda não tem rascunhos.',

    //draft edit
    appBarDraftModel: 'Editar Rascunho',
    editDraftName: 'Nome',
    editDraftCategory: 'Categoria',
    editDraftSystem: 'Sistema',
    editDraftText: 'Texto',
    editDraftLoading: 'Carregando...',
    editDraftBtnSaveChanges: 'Salvar Mudanças',
    editDraftBtnDeleteDraft: 'Deletar Rascunho',

    //------------------------------------
    //ALERTS AND TOASTS

    //common alerts
    alertCommonTitle: 'Alerta',
    alertCatchError: 'Algo deu errado: ',
    alertConfirm: 'Sim',
    alertCancel: 'Cancelar',

    //create draft
    alertCreateDraftAllFields: 'Todos os campos precisam ser preenchidos.',
    alertCreateDraftReachedMaximum: 'Você atingiu o número máximo de rascunhos permitidos. precisará deletar pelo menos um pra continuar.',
    toastCreateDraftCreated: 'Rascunho criado!',

    //draft edit
    toastDraftEditUpdated: 'Rascunho atualizado!',
    toastDraftEditDeleted: 'Rascunho deletado!',
    alertDraftEditTitle: 'Deletar Rascunho',
    alertDraftEditMessage: 'Tem certeza de que deseja deletar seu rascunho?',
    toastDraftEditCanceled: 'Ação cancelada.',
    alertDraftEditNoExist: 'Sem documentos aqui.',

    //forgot password
    toastForgotPasswordDone: 'Pronto, por favor confira seu e-mail.',

    //login
    alertTitleLoginFillFields: 'Campos em branco',
    alertLoginFillFields: 'Por favor, preencha todos os campos.',
    
    toastLoginSuccess: 'Logado com sucesso!',

    //dealing with firebase exceptions
    alertTitleUserNotFound: 'Usuário não encontrado',
    alertUserNotFound: 'Não foi possível encontrar o usuário com este e-mail.',

    alertTitleInvalidEmail: 'E-mail inválido',
    alertInvalidEmail: 'Você precisa digitar um e-mail válido.',
   
    alertTitleEmailInUse: 'E-mail em uso',
    alertEmailInUse: 'Este e-mail já está sendo usado.',

    alertTitleWeakPassword: 'Senha fraca',
    alertWeakPassword: 'A senha deve ter no mínimo 6 caracteres.',

    alertTitleRecentLogin: 'Necessário login recente',
    alertRecentLogin: 'Por segurança, é necessário realizar login novamente antes de fazer essa ação.',

    //name generator
    toastNameGeneratorCopied: 'copiado para o seu teclado.',

    //preferences
    alertTitlePreferencesPermissions: 'Permissão negada',
    alertPreferencesPermissions: 'Lamentamos, mas precisamos das permissões de câmera para executar essa ação!',
    toastPreferencesImageAdded: 'Imagem adicionada.',
    toastPreferencesImageSaved: 'Imagem salva.',
    toastPreferencesNameUpdated: 'Nome atualizado.',
    toastPreferencesEmailUpdated: 'E-mail atualizado.',
    alertPreferencesTitle: 'Deletar conta',
    alertPreferencesMessage: 'Tem certeza que deseja deletar sua conta? Isso não pode ser desfeito.',
    toastPreferencesUserDeleted: 'Usuário deletado!',
    toastPreferencesDeleteCancel: 'Ação cancelada.',
    preferencesEditableProfile: 'Editar Perfil',

    //register
    alertRegisterTitleFillFields: 'Campos vazios',
    alertRegisterFillFields: 'Você precisa preencher todos os campos!',
    alertRegisterTitlePassword: 'Conflito de senhas',
    alertRegisterPassword: 'Senha e Confirmar Senha não podem ser diferentes!',
    toastRegisterSuccess: 'Registrado com sucesso!',

    //roll dices
    alertRollQuantity: 'A quantidade precisa ser um valor entre 1 e 5.',
    alertRollModifier: 'O modificador precisa ser um valor entre -30 e 30.',
    
    //drawer content
    alertLogoutTitle: 'Logout',
    alertLogoutMessage: 'Tem certeza de que deseja fazer logout?',
    alertLogoutCanceled: 'Logout cancelado.',
    alertLogoutSuccessful: 'Você fez logout.',

};
  
export default pt;