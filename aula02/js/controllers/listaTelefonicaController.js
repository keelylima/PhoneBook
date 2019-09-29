 // O $scope seria o garçom, medicação entre a view e o controller
 angular.module("listaTelefonica").controller("listaTelefonicaController", ($scope) => {

    //Binding, pega a informação daqui, do controller/$scope e joga pra view
    $scope.message = 'Lista Telefonica';
    $scope.contatos = [
        {
            nome: 'Kelly',
            telefone: '(11) 97952-4567',
            data: new Date()
        },
        {
            nome: 'Thalita',
            telefone: '(31) 97865-9876',
            data: new Date()
        },
        {
            nome: 'Claudia',
            telefone: '(12) 97654-3423',
            data: new Date()
        }
    ];
    $scope.operadoras = [
        {
            nome: 'Oi',
            codigo: 14,
            categoria: 'Celular'
        },
        {
            nome: 'Vivo',
            codigo: 15,
            categoria: 'Celular'
        },
        {
            nome: 'Tim',
            codigo: 41,
            categoria: 'Celular'
        },
    ];

    //O ngModel, ele vai pegar da view (input) e jogar aqui pro controller/$scope
    $scope.adicionarContato = (contato) => {

        //angular.copy é para criar uma cópia, após adicionar na lista, quando mexo nos inputs não altera o valor
        $scope.contatos.push(angular.copy(contato));

        //delete é para deletar o objeto após a execução.
        //limpa os input
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }

    $scope.deletarContato = (contatos) => {
        $scope.contatos = contatos.filter((contato) => {
            if (!contato.selecionado) {
                return contato;
            }
        })
    }

    $scope.isContatoSelecionado = (contatos) => {
        return contatos.some((contato) => {
            return contato.selecionado;
        })
    }
})