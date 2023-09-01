using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class NgoFund
{
    public int NfId { get; set; }

    public int NgoId { get; set; }

    public int ArtId { get; set; }

    public decimal? Amount { get; set; }

    public DateTime Datetime { get; set; }

    public virtual Art Art { get; set; } = null!;

    public virtual Ngo Ngo { get; set; } = null!;
}
