var status = {
    vida: 20,
    fome: 10,
    carisma : 0,
    furtividade: 0,
    cash: 100,

    tiraVida: function()
    {
        if (this.fome == 0)
        {
            this.vida -= 2;
        }
    }
}
status.fome = 0;
status.tiraVida();
console.log(status);
