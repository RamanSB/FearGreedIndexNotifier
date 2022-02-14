export const formatPrice = (price: number) => {
    const formatConfig = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  
    return formatConfig.format(price);
}

export const formatPlusMinus = (priceChange: number) => {
    const isPositive = Math.sign(priceChange) >= 0;
    console.log(`price change: ${priceChange}`);
    return (
      <span className={`${isPositive ? 'positive' : 'negative'}`}>
        {`${isPositive ? '+' : ''}${priceChange.toFixed(2)}%`}
      </span>
    );
  }

/**
 * This method determines the styling that should be applied to the text value of the fear-greed index
 * i.e. 100 is extreme greed - yellow conveys greed, so when fgi [90, 100] display a strong yellow.
 * 
 * 
 * @param fgiValue Fear greed index value
 */
export const formatFearGreedIndex = (fgiValue: number) => {
  
}