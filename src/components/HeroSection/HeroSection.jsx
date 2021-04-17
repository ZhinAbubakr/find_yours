import React from "react"
import { motion } from "framer-motion"
import PlanetOne from "../../images/1.png"
import PlanetTwo from "../../images/2.png"
import PlanetThree from "../../images/3.png"
import {
	Section,
	Container,
	ColumnLeft,
	ColumnRight,
	Image,
	Button
} from "./style.js"

export default function HeroSection() {
	const fadeLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 }
	}

	return (
		<Section>
			<Container>
				<ColumnLeft>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Welcome to FindYours
					</motion.h1>
					<motion.p
						variants={fadeLeft}
						initial="hidden"
						animate="visible"
						transition={{ duration: 1 }}>
						Lost & Found
					</motion.p>
					<Button
						whileHover={{ scale: 1.05 }}
						whileTap={{
							scale: 0.95,
							backgroundColor: "#67F6E7",
							border: "none",
							color: "#000"
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.5 } }}>
						Submit
					</Button>
				</ColumnLeft>
				<ColumnRight>
					<Image
						src={PlanetOne}
						alt="planet"
						whileTap={{ scale: 0.9 }}
						drag={true}
						dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
					/>
					<Image
						src={PlanetTwo}
						alt="planet"
						whileTap={{ scale: 0.6 }}
						drag={true}
						dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
					/>
					<Image
						src={PlanetThree}
						alt="planet"
						whileTap={{ scale: 0.8 }}
						drag={true}
						dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
					/>
					{/* <Image
				src={PlanetFour}
				alt='planet'
				whileTap={{ scale: 0.9 }}
				drag={true}
				dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
			  /> */}
				</ColumnRight>
			</Container>
		</Section>
	)
}
