using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class Art
{
    public int ArtId { get; set; }

    public int ArtistId { get; set; }

    public int CatId { get; set; }

    public decimal Price { get; set; }

    public int NgoId { get; set; }

    public string? Description { get; set; }

    public string ArtName { get; set; } = null!;

    public string? Status { get; set; }

    public byte[]? Image { get; set; }

    public virtual ICollection<AfwFund> AfwFunds { get; set; } = new List<AfwFund>();

    public virtual Artist Artist { get; set; } = null!;

    public virtual Category Cat { get; set; } = null!;

    public virtual Ngo Ngo { get; set; } = null!;

    public virtual ICollection<NgoFund> NgoFunds { get; set; } = new List<NgoFund>();

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
}
