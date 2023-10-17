
const getImportProps = (options) => {
  const props = options.assertions ?? options.attributes ?? undefined

  if(!props) {
    throw new Error("can't find assertions or attrivutes")
  }

  return props
}
/***
 * @returns {{name: string, enforce: 'pre'}}
 */
export default (mode) => ({
  name: "helper",
  enforce: "pre",
  /**
   * 
   * @param {string} id 
   * @param {string | undefined} importer 
   * @param {object} options 
   */
  resolveId(id, importer, options) {
    // ignore internal things
    if(options?.custom["node-resolve"] || !importer || id.startsWith('vite/') || id.includes('?html-proxy')){
      return
    }
    const props = getImportProps(options);
    console.log(mode ,id,importer, props)
    if(id.endsWith(".json") && props["type"]!=="json"){
      this.error(`json import does not have json type: ${id}, ${options}`)
    }
    // test that data.json import assert in test-import-assertion-dep has node_module property
    if(importer.includes("/test-import-assertion-dep/") || importer.includes("/test-import-attributes-dep/")) {
      if(!props["node_modules"]){
        this.error(`import ${id} in ${importer} does not have node_modules prop.`)
      }
    }

    if(importer.includes("/base-code/assertion") || importer.includes("/base-code/attributes")){
      if(!props["client"]){
        this.error(`import ${id} in ${importer} does not have client prop`)
      }
    }
  }
})