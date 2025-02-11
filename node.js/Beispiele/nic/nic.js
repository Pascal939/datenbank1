const os = require("os");


const interfaces = Object.values( os.networkInterfaces() ).flat()

const ipv4 = interfaces.filter( nic => nic.family == "IPv4")
const ipv6 = interfaces.filter( nic => nic.family == "IPv6")



console.log("IPv4 Addr\n")
ipv4.forEach( nic => {
	
	const mask = nic.netmask.split(".")
	const net = nic.address.split(".").map( (value,index) => {
		return value & mask[index]
	})
	
	
	const hosts =  1 << nic.netmask
						.split(".")
						.map( value => new Number(value)
										.toString(2)
										.padStart(8,0 ))
										.map( f => f.split("")
													.filter(x=>x == 0).length)
						.reduce( (a,b) => a+b )
	
	const broadcast = net.map( (value,index) => {
		return value | (255 -  mask[index])
	})	
	
	
	
	console.log("IPv4" , nic.address)
	console.log("Mask" , nic.netmask)
	console.log("Number of Hosts:", hosts)
	console.log("Network  :" , net.join("."))
	console.log("Broadcast  :" , broadcast.join("."))
	console.log("\n\n")
	
	
})

console.log("\nIPv6 Addr\n")
ipv6.forEach( nic => {
	console.log("IPv6" , nic.address)
	console.log("Mask" , nic.netmask)
})