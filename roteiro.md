//////Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:
O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigaórios para o cadastro

//////Funcionalidade: Login no site Adopet
Cenário: Login no sistema com sucesso

Passos:
O usuário acessa a página de login.
O usuário insere seu email "ana@email.com" e senha "Senha123" nos campos correspondentes.
O usuário clica no botão "Entrar".

Resultados Esperados:
O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuário para a página "/home".

//////Funcionalidade: Login no site Adopet
Cenário: Falha no login do sistema

Passos:
O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão de login.

Resultados Esperados:
O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".

Regra de Negócio:
O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres


Exercícios
Refatore os testes já realizados aplicando o método beforeEach().
Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.
Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.