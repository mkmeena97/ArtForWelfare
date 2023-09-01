using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class Ngo
{
    public int NgoId { get; set; }

    public int UserId { get; set; }

    public string NgoName { get; set; } = null!;

    public string? Domain { get; set; }

    public int AreaId { get; set; }

    public string Address { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public byte[]? Certificate { get; set; }

    public string? AccountNo { get; set; }

    public virtual Area Area { get; set; } = null!;

    public virtual ICollection<Art> Arts { get; set; } = new List<Art>();

    public virtual ICollection<NgoFund> NgoFunds { get; set; } = new List<NgoFund>();

    public virtual User User { get; set; } = null!;
}
