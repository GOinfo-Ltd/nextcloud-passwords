(function() {
    let translations = {
            'Passwords'                           : 'Senhas',
            'All'                                 : 'Todo',
            'Folders'                             : 'Pastas',
            'Recent'                              : 'Recente',
            'Favorites'                           : 'Favoritos',
            'Shared'                              : 'Compartilhado',
            'Tags'                                : 'Etiquetas',
            'Security'                            : 'Segurança',
            'Trash'                               : 'Lixo',
            'Details'                             : 'Detalhes',
            'Edit'                                : 'Editar',
            'Edit as new'                         : 'Editar como novo',
            'Move'                                : 'Mover',
            'Rename'                              : 'Renomear',
            'Delete'                              : 'Excluir',
            'Restore'                             : 'Restaurar',
            'Open {label}'                        : 'Abra {label}',
            'New Password'                        : 'Nova Senha',
            'New Folder'                          : 'Nova Pasta',
            'New Tag'                             : 'Nova etiqueta',
            'Status'                              : 'Status',
            'Secure'                              : 'Seguro',
            'Weak'                                : 'Fraco',
            'Weak (Duplicate)'                    : 'Fraco (duplicado)',
            'Weak (Outdated)'                     : 'Fraco (desatualizado)',
            'Breached'                            : 'Quebrado',
            'SHA-1'                               : 'SHA-1',
            'Notes'                               : 'Notas',
            'Share'                               : 'Compartilhar',
            'Revisions'                           : 'Revisões',
            'QR Code'                             : 'QR Code',
            'Password'                            : 'Senha',
            'Username'                            : 'Nome de usuário',
            'Website'                             : 'Webseite',
            'Add Tags...'                         : 'Adicionar etiquetas ...',
            'Color'                               : 'Cor',
            'Name'                                : 'Nome',
            'Label'                               : 'Rótulo',
            'General'                             : 'Em geral',
            'Properties'                          : 'Propriedades',
            'Numbers'                             : 'Números',
            'Special Characters'                  : 'Caracteres especiais',
            'Strength'                            : 'Força',
            'More Options'                        : 'Mais opções',
            'Close'                               : 'Fechar',
            'Favorite'                            : 'Favorito',
            'Remove from favorites'               : 'Remover dos favoritos',
            'Mark as favorite'                    : 'Marcar como favorito',
            'Encryption'                          : 'Criptografia',
            'On the server'                       : 'No servidor',
            'Secret'                              : 'Segredo',
            'Text'                                : 'Texto',
            'File'                                : 'Arquivo',
            'Data'                                : 'Dados',
            'Type'                                : 'Modelo',
            'Value'                               : 'Valor',
            'New field'                           : 'Novo campo',
            'Delete field'                        : 'Apagar campo',
            'Toggle visibility'                   : 'Alternar visibilidade',
            'Generate password'                   : 'Gerar senha',
            'Simple Server Side Encryption V1'    : 'Criptografia simples do lado do servidor V1',
            'Take some notes'                     : 'Faça algumas anotações',
            'Save'                                : 'Salvar',
            'Create folder'                       : 'Criar pasta',
            'Folder created'                      : 'Pasta criada',
            'Creating folder failed'              : 'Falha ao criar pasta',
            'Rename folder'                       : 'Renomear pasta',
            'Folder renamed'                      : 'Pasta renomeada',
            'Renaming folder failed'              : 'Falha ao renomear pasta',
            'Folder moved'                        : 'Pasta movida',
            'Moving folder failed'                : 'Falha ao mover a pasta',
            'Delete folder'                       : 'Excluir pasta',
            'Do you want to delete the folder'    : 'Você quer deletar a pasta?',
            'Folder deleted'                      : 'Pasta excluída',
            'Deleting folder failed'              : 'Falha ao excluir pasta',
            'Folder restored'                     : 'Pasta restaurada',
            'Restoring folder failed'             : 'Falha ao restaurar a pasta',
            'Create tag'                          : 'Criar etiqueta',
            'Tag created'                         : 'Etiqueta criada',
            'Creating tag failed'                 : 'Falha ao criar etiqueta',
            'Edit tag'                            : 'Editar etiqueta',
            'Generate random color'               : 'Gerar cor aleatória',
            'Tag saved'                           : 'Etiqueta salva',
            'Saving tag failed'                   : 'Falha ao salvar etiqueta',
            'Delete tag'                          : 'Excluir etiqueta',
            'Do you want to delete the tag'       : 'Você quer deletar a etiqueta?',
            'Tag deleted'                         : 'Etiqueta deletada',
            'Deleting tag failed'                 : 'Falha ao excluir etiqueta',
            'Tag restored'                        : 'Etiqueta restaurada',
            'Restoring tag failed'                : 'Falha ao restaurar etiqueta',
            'Create password'                     : 'Criar senha',
            'Password created'                    : 'Senha criada',
            'Creating password failed'            : 'Falha ao criar senha',
            'Edit password'                       : 'Editar senha',
            'Password saved'                      : 'Senha salva',
            'Saving password failed'              : 'Falha ao salvar senha',
            'Password moved'                      : 'Senha movida',
            'Moving password failed'              : 'Falha ao mover a senha',
            'Delete password'                     : 'Excluir senha',
            'Do you want to delete the password'  : 'Você quer deletar a senha?',
            'Password deleted'                    : 'Senha excluída',
            'Password restored'                   : 'Senha restaurada',
            'Restoring password failed'           : 'Falha ao restaurar a senha',
            'Open Url'                            : 'Abrir URL',
            'Copy Url'                            : 'Copiar URL',
            'Copy User'                           : 'Copiar usuário',
            'Copy Password'                       : 'Copiar senha',
            '{element} was copied to clipboard'   : '{element} foi copiado para a área de transferência',
            'Error copying {element} to clipboard': 'Erro ao copiar {element} para a área de transferência',
            'Last modified on {date}'             : 'Última modificação em {date}',
            'Restore revision'                    : 'Restaurar revisão',
            'Revision restored'                   : 'Revisão restaurada',
            'Restoring revision failed'           : 'Falha ao restaurar a revisão',
            'Do you want to restore the revision?': 'Você deseja restaurar a revisão?',
            'Shared with you'                     : 'Compartilhado com você',
            'Shared by you'                       : 'Compartilhado por você',
            'Statistics'                          : 'Estatisticas',
            'Created on'                          : 'Criado em',
            'Last updated'                        : 'Ultima atualização',
            '{count} revisions'                   : '{count} revisões',
            'Shares'                              : 'Ações',
            '{count} shares'                      : '{count} compartilhamentos',
            'Encryption applied on server'        : 'Criptografia aplicada no servidor',
            'Encryption applied on client'        : 'Criptografia aplicada no cliente',
            'No encryption'                       : 'Sem criptografia',
            'Simple encryption (Gen. 1)'          : 'Criptografia simples (Geração 1)',
            'Simple encryption (Gen. 2)'          : 'Criptografia simples (Geração 2)',
            'Advanced encryption (SSE V2)'        : 'Criptografia avançada (SSE V2)',
            'Encryption with libsodium'           : 'Criptografia com libsodium',
            'More'                                : 'Mais',
            'Backup and Restore'                  : 'Backup e restauração',
            'Settings'                            : 'Configurações',
            'Handbook'                            : 'Manual',
            'Apps and Extensions'                 : 'Aplicativos e extensões',
            '{name} has shared this with you'     : '{name} compartilhou isso com você',
            '{editable} and {shareable}.'         : '{editable} e {shareable}.',
            'Editing allowed'                     : 'Edição permitida',
            'Editing disallowed'                  : 'Edição não permitida',
            'sharing allowed'                     : 'compartilhamento permitido',
            'sharing disallowed'                  : 'compartilhamento não permitido',
            'Search user'                         : 'Pesquisar usuário',
            'Set expiration date'                 : 'Definir data de validade',
            'Expires {date}'                      : 'Expira em {date}',
            'Choose expiration date'              : 'Escolha a data de validade',
            'Please choose a date in the future'  : 'Por favor, escolha uma data no futuro',
            'Invalid date'                        : 'Data inválida',
            'The user {uid} does not exist'       : 'O usuário {uid} não existe',
            'Unable to share password: {message}' : 'Incapaz de compartilhar a senha: {message}',
            'Toggle write permissions'            : 'Alternar permissões de gravação',
            'Toggle share permissions'            : 'Alternar permissões de compartilhamento',
            'Stop sharing'                        : 'Pare de compartilhar',
            'Date'                                : 'Data',
            'Default Cache (0 files, 0 B)'        : 'Cache padrão (0 arquivos, 0 B)',
            'Avatars Cache (0 files, 0 B)'        : 'Cache de Avatares (0 arquivos, 0 B)',
            'Favicon Cache (0 files, 0 B)'        : 'Favicon Cache (0 arquivos, 0 B)',
            'Preview Cache (0 files, 0 B)'        : 'Cache de visualização (0 arquivos, 0 B)',
            'Passwords Cache (0 files, 0 B)'      : 'Cache de senhas (0 arquivos, 0 B)',
            'Changed'                             : 'Alterado',
            'Modified'                            : 'Modificado',
            'Edited'                              : 'Editado',
            'Created'                             : 'Criado',
            'Folder'                              : 'Pasta',
            'Revision'                            : 'Revisão',
            'Url'                                 : 'Url',
            'Parent'                              : 'Pai',
            'Delete All Items'                    : 'Excluir todos os itens',
            'Restore All Items'                   : 'Restaurar todos os itens',
            'Restore Items'                       : 'Restaurar Itens',
            'Restore all items in trash?'         : 'Restaurar todos os itens no lixo?',
            'Restore this item'                   : 'Restaurar este item',
            'Items restored'                      : 'Itens restaurados',
            'Empty Trash'                         : 'Lixo vazio',
            'Delete all items in trash?'          : 'Excluir todos os itens da lixeira?',
            'Trash emptied'                       : 'Lixo esvaziado',
            'Search'                              : 'Procurar',
            'Use the search box to search'        : 'Use a caixa de pesquisa para pesquisar',
            'Search everywhere for "{query}"'     : 'Pesquisar em todos os lugares por "{query}"',
            'There is nothing here'               : 'Não há nada aqui',
            'Click on "+" to add something'       : 'Clique em "+" para adicionar algo',
            'Deleted items will appear here'      : 'Itens excluídos aparecerão aqui',
            'No passwords were shared with you'   : 'Nenhuma senha foi compartilhada com você',
            'You did not share any passwords'     : 'Você não compartilhou nenhuma senha',
            'Your favorites will appear here'     : 'Seus favoritos aparecerão aqui',
            'Better check the other sections'     : 'Melhor verificar as outras seções',
            'That\'s probably a good sign'        : 'Provavelmente é um bom sinal',
            'Go to {href}'                        : 'Vá para {href}',
            'Contents'                            : 'Conteúdo',
            'Figure {count}: {title}'             : 'Figura {count}: {title}',
            'Unable to fetch page: {message}.'    : 'Incapaz de obter a página: {message}.',
            'Invalid content type {mime}'         : 'Tipo de conteúdo inválido {mime}',
            'No content available'                : 'Nenhum conteúdo disponível',
            'Not Found'                           : 'Não encontrado',
            'Still need help?'                    : 'Ainda precisa de ajuda?',
            'Ask in our forum!'                   : 'Pergunte em nosso fórum!',
            'Or in our Chat!'                     : 'Ou no nosso chat!',
            'Found an error?'                     : 'Encontrou um erro?',
            'Tell us!'                            : 'Nos digam!',
            'The session has expired'             : 'A sessão expirou',
            'API Session Token expired'           : 'Token de sessão API expirado',
            'Network error'                       : 'Erro de rede',
            'Unable to load {module}'             : 'Incapaz de carregar {module}',
            'Sort by name'                        : 'Classificar por nome',
            'Sort by modified date'               : 'Classificar por data de modificação',
            '{passwords} passwords'               : '{passwords} Senhas',
            '1 password'                          : '1 Senha',
            '{folders} folders'                   : '{folders} Pastas',
            '1 folder'                            : '1 Pasta',
            '{tags} tags'                         : '{tags} Etiquetas',
            '1 tag'                               : '1 Etiqueta',
            'Nothing'                             : 'Nenhuma coisa',
            ' and '                               : ' e ',
            'match'                               : 'Combine',
            'matches'                             : 'partidas',
            'Created by'                          : 'Criado por',
            'You are logging in as {user}'        : 'Você está fazendo login como {user}',
            'Login'                               : 'Conecte-se',
            'Request token again'                 : 'Solicitar token novamente',
            'Too many attempts'                   : 'Muitas tentativas',
            'Password is too short'               : 'A senha é muito curta',
            'Password invalid'                    : 'Senha inválida',
            'Unknown Error'                       : 'Erro desconhecido',
            'Token request failed'                : 'Falha na solicitação de token',
            'CLIENT::MAINTENANCE'                 : 'Modo de manutenção do sistema',
            'CLIENT::UNKNOWN'                     : 'Indisponível',
            'CLIENT::SYSTEM'                      : 'Sistema',
            'CLIENT::PUBLIC'                      : 'Acesso público',
            'CLIENT::CRON'                        : 'Tarefa automática em segundo plano',
            'CLIENT::CLI'                         : 'Linha de comando do servidor',
            'Please correct your input'           : 'Por favor, corrija sua entrada',
            'Show value'                          : 'Mostrar valor',
            'Select a folder'                     : 'Selecione uma pasta',
            'Select "{folder}"'                   : 'Selecione a "{folder}"',
            '{label} can\'t be used'              : '{label} não pode ser usado',
            'Home'                                : 'Casa',
            'Cancel'                              : 'Cancelar',
            'Ok'                                  : 'Ok',
            'true'                                : 'verdade',
            'false'                               : 'falso',
            'yes'                                 : 'sim',
            'no'                                  : 'não'
        },
        helpTexts    = {
            'You have reached the maximum length of 4096 characters'          : 'Você atingiu o comprimento máximo de 4096 caracteres',
            'We could not find anything for "{query}"'                        : 'Não conseguimos encontrar nada para "{query}"',
            'The page "{page}" could not be fetched from the handbook server.': 'A página "{page}" não pôde ser obtida do servidor de manuais.',
            'Some data is waiting to be synchronized'                         : 'Alguns dados estão esperando para serem sincronizados',
            'You will be logged out in {time} seconds'                        : 'Você será desconectado em {time} segundos',
            'You may have requested too many tokens. Please try again later.' : 'Você pode ter solicitado muitos tokens. Por favor, tente novamente mais tarde.',
            'Choose the encryption type for this password'                    : 'Escolha o tipo de criptografia para esta senha',
            'Do you want to delete the field "{field}"?'                      : 'Quer excluir o campo "{field}"?'
        },
        longTexts    = {
            'End-to-End encryption will be disabled for this password if you share it.'                : 'A criptografia de ponta a ponta será desabilitada para esta senha se você compartilhá-la.',
            'The session token is no longer valid. The app will now reload.'                           : 'O token de sessão não é mais válido. O aplicativo será recarregado agora.',
            'Today in 2018, the first version of passwords was published. Thank you for using the app.': 'Hoje, em 2018, foi publicada a primeira versão de senhas. Obrigado por usar o aplicativo.',
            'The encryption applied by the server before storing the data in the database'             : 'A criptografia aplicada pelo servidor antes de armazenar os dados no banco de dados',
            'The encryption applied by the client before sending the data to the server'               : 'A criptografia aplicada pelo cliente antes de enviar os dados para o servidor'
        };

    OC.L10N.register(
        'passwords',
        Object.assign(translations, helpTexts, longTexts),
        'nplurals=2; plural=(n != 1);'
    );
}());