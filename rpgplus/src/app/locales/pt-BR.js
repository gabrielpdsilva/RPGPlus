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
    homeTitle: 'Bem-vindo, ',
    homeSubtitle: 'Obrigado por usar o RPG+! Por favor, selecione o menu no canto superior esquerdo e confira as ferramentas disponíveis.',

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
    rollQuantityPlaceholder: 'Valor padrão = 1',
    rollModifier: 'Modificador',
    rollModifierPlaceholder: 'Valor padrão = 0',
    rollCountingDices: 'º dado: ',
    rollSum: 'Soma dos valores: ',
    rollBtnRoll: 'Rolar Dados',

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
    preferencesChangeImage: 'Mudar Imagem',
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

    //draft model
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
    alertCatchError: 'Algo deu errado: ',
    alertConfirm: 'Sim',
    alertCancel: 'Cancelar',

    //create draft
    alertCreateDraftAllFields: 'Todos os campos precisam ser preenchidos.',
    alertCreateDraftReachedMaximum: 'Você atingiu o número máximo de rascunhos permitidos. precisará deletar pelo menos um pra continuar.',
    toastCreateDraftCreated: 'Rascunho criado!',

    
    //draft model
    toastDraftModelUpdated: 'Rascunho atualizado!',
    toastDraftModelDeleted: 'Rascunho deletado!',
    alertDraftModelTitle: 'Deletar Rascunho',
    alertDraftModelMessage: 'Tem certeza de que deseja deletar seu rascunho?',
    toastDraftModelCanceled: 'Ação cancelada.',
    alertDraftModelNoExist: 'Sem documentos aqui.',

    //forgot password
    toastForgotPasswordDone: 'Pronto, por favor confira seu e-mail.',

    //list draft
    alertListDraftNoDocs: 'Não há documentos aqui.',

    //login
    alertLoginFillFields: 'Por favor, preencha todos os campos.',
    toastLoginSuccess: 'Logado com sucesso!',

    //name generator
    toastNameGeneratorCopied: 'copiado para o seu teclado.',

    //preferences
    alertPreferencesPermissions: 'Lamentamos, mas precisamos das permissões de câmera para executar essa ação!',
    toastPreferencesImageAdded: 'Imagem adicionada.',
    toastPreferencesImageSaved: 'Imagem salva.',
    alertPreferencesTitle: 'Deletar Conta',
    alertPreferencesMessage: 'Tem certeza que deseja deletar sua conta? Isso não pode ser desfeito.',
    toastPreferencesUserDeleted: 'Usuário deletado!',
    toastPreferencesUpdateDone: 'Pronto!',
    toastPreferencesDeleteCancel: 'Ação cancelada.',

    //register
    alertRegisterFillFields: 'Você precisa preencher todos os campos!',
    alertRegisterPassword: 'Senha e COnfirmar Senha não podem ser diferentes!',
    toastRegisterSuccess: 'Registrado com sucesso!',

    //roll dices
    alertRollQuantity: 'A quantidade precisa ser um valor entre 1 e 5.',
    alertRollModifier: 'O modificador precisa ser um valor entre -30 e 30.',
    
};
  
export default pt;