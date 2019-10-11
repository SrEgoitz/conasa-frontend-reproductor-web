import router from './../router';

export const mixins = {
    created() {
        const h = this.$createElement;
        const messageVNode = h("div", { class: ["foobar"] }, [
            h("p", { class: ["text-center"] }, [
                " Tu sesion ha expirado, cerrando sesion"
            ]),
            h("p", { class: ["text-center"] }, [h("b-spinner")])
        ]);

        let date = Date.parse(localStorage.getItem("time"));
        if (localStorage.getItem("user")) {
            if (Date.now() > date) {
                this.$bvModal.msgBoxOk([messageVNode], {
                    title: "Cerrando Sesion",
                    centered: true,
                    noCloseOnBackdrop: true,
                    noCloseOnEsc: true,
                });
                localStorage.removeItem("time");
                localStorage.removeItem("user");
                setTimeout(() => {               
                    router.push("/")
                  }, 2000);
            } 
        };
    }
}