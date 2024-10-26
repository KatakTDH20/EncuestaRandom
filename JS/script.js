const inst = {
    data() {
      return {
        pepino: '',
        mascotas: 0,
        genero: '',
        cancion: '',
        playlist: [],
        cuestionario: false,
        resultado: false,
        pepinoSi: './Imagenes/p3rr0n.jpg', 
        pepinoNo: './Imagenes/prietokun.jpg' 
      };
    },
    methods: {
      decide() {
        this.cuestionario = this.pepino === 'Sí';
        this.resultado = false;
      },
      playlistChida() {
        if (this.cancion && !this.playlist.includes(this.cancion)) {
          this.playlist.push(this.cancion);
          this.cancion = '';
        }
      },
      mostrarResultados() {
        this.resultado = true;
      }
    }
  };
  
  Vue.createApp(inst).mount('#app');
  
  