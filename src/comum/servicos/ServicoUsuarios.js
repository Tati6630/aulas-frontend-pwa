class ServicoUsuarios {
    listar() {
        const usuariosDoLocalStorage = localStorage.getItem(
            'lista-usuarios'
        );
        if (usuariosDoLocalStorage) {
            return JSON.parse(usuariosDoLocalStorage);
        }

        return []
    }
    cadastraUsuario(usuario){
        const usuariosDoLocalStorage = this.listar();
        usuariosDoLocalStorage.push(usuario);
        localStorage.setItem('lista-usuarios', JSON.stringify(usuariosDoLocalStorage));
    }
}

export default ServicoUsuarios;