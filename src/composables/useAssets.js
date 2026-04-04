export function useAssets() {
  const images = import.meta.glob('../assets/images/works/**/*', {
    eager: true,
    import: 'default',
  })

  const getImage = (path) => {
    if (!path) return ''
    return images[`../assets/images/works/${path}`] || ''
  }

  return {
    getImage,
  }
}
