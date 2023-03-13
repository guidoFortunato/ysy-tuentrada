import React from 'react';

const Footer = () => {
	return (
		<>
			{/* <footer id='footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<p className='credits'>
								{variables.venueName}
								<a
									href={variables.linkTuentrada}
									target='_blank'
									rel='noreferrer'
									className='ms-2'
								>
									{variables.tuentradaName}
								</a>
							</p>
							<div className='text-center'>
								<a
									href={variables.linkVenueFb}
									target='_blank'
									rel='noreferrer'
									className='me-2'
								>
									<i className='bi bi-facebook m'></i>
								</a>

								<a
									href={variables.linkVenueIg}
									target='_blank'
									rel='noreferrer'
									className='me-2'
								>
									<i className='bi bi-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer> */}

			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-lg-6 text-center bright'>
							<h5 className='mb-3'>Seguinos en:</h5>
							<div className='mb-3'>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://instagram.com/tuentrada'
										className='text-decoration-none'
									>
										<img
											src='https://www.tuentrada.com/img/ic_f_instagram.svg'
											alt='instagram'
										/>
									</a>
								</div>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://instagram.com/tuentrada'
										className='text-decoration-none'
									>
										<span>Instagram</span>
									</a>
								</div>
							</div>
							<div className='mb-3'>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.youtube.com/channel/UCWBDAowyYqIzDzhkUWYP_3w/videos'
										className='text-decoration-none'
									>
										<img
											src='https://www.tuentrada.com/img/ic_f_youtube.svg'
											alt='youtube'
										/>
									</a>
								</div>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.youtube.com/channel/UCWBDAowyYqIzDzhkUWYP_3w/videos'
										className='text-decoration-none'
									>
										<span>Youtube</span>
									</a>
								</div>
							</div>
							<div className='mb-3'>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://twitter.com/tuentrada'
										className='text-decoration-none'
									>
										<img
											src='https://www.tuentrada.com/img/ic_f_twitter.svg'
											alt='twitter'
										/>
									</a>
								</div>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://twitter.com/tuentrada'
										className='text-decoration-none'
									>
										<span>Twitter</span>
									</a>
								</div>
							</div>
							<div className='mb-3 mb-lg-0'>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.facebook.com/tuentrada'
										className='text-decoration-none'
									>
										<img
											src='https://www.tuentrada.com/img/ic_f_facebook.svg'
											alt='facebook'
										/>
									</a>
								</div>
								<div>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.facebook.com/tuentrada'
										className='text-decoration-none'
									>
										<span>Facebook</span>
									</a>
								</div>
							</div>
						</div>
						<div className='container-hr'>
							<hr />
						</div>

						<div className='col-12 col-lg-6 mb-0 mb-lg-4 text-center btop'>
							<h5 className='mb-3'>Menú:</h5>
							<div className='mb-1'>
								<a
									href='https://docs.google.com/forms/d/e/1FAIpQLSctS6XuqX8kyyrsR_mwzci5KGsUjsNn-XPWDU9I1RvaB7vKUA/viewform'
									rel='noreferrer'
									target='_blank'
								>
									Botón de arrepentimiento
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/contacto/'
									rel='noreferrer'
									target='_blank'
								>
									Contactános
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/terminosycondiciones/'
									rel='noreferrer'
									target='_blank'
								>
									Términos y condiciones
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/vende/'
									rel='noreferrer'
									target='_blank'
								>
									Vendé con TuEntrada
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/quienes-somos/'
									rel='noreferrer'
									target='_blank'
								>
									Quienes somos
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/privacidad/'
									rel='noreferrer'
									target='_blank'
								>
									Políticas de privacidad
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/requisitos-imagenes/requisitosWEB_TuEntradaOK.pdf'
									rel='noreferrer'
									target='_blank'
								>
									Requisitos de imágenes
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/experiencia/vende-tuentrada/'
									rel='noreferrer'
									target='_blank'
								>
									Vende TuEntrada de Fan a Fan
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://tuentrada.com/logos/logosTUENTRADAdescargar.rar'
									rel='noreferrer'
									target='_blank'
								>
									Descargar logos TuEntrada
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/protege-tuentrada/'
									rel='noreferrer'
									target='_blank'
								>
									Protege TuEntrada
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/defensa-al-consumidor/'
									rel='noreferrer'
									target='_blank'
								>
									Defensa al consumidor
								</a>
							</div>
							<div className='mb-1'>
								<a
									href='https://www.tuentrada.com/wallet/'
									rel='noreferrer'
									target='_blank'
								>
									TuEntrada Wallet
								</a>
							</div>
						</div>

						<div className='container-hr'>
							<hr />
						</div>
						<div className='col-12 col-lg-6 my-4 text-center btop'>
							<p>
								Copyright @ 2023 TUENTRADA.COM <br />
								Todos los derechos reservados
							</p>
						</div>
						<div className='col-12 col-lg-6 alineacion-afip my-4 mb-lg-0'>
							<div className='mb-4 mb-lg-0 me-lg-5'>
								<img
									src='https://www.tuentrada.com/img/pdp.png'
									width='60px'
									alt='pdp'
									className='pdp'
								/>
							</div>
							<div className='mb-4 mb-lg-0 me-lg-5'>
								<a
									href='https://www.afip.gob.ar/'
									target='_blank'
									rel='noreferrer'
								>
									<img
										src='https://www.afip.gob.ar/images/f960/DATAWEB.jpg'
										border='0'
										alt='afip'
										width='55px'
									/>
								</a>
							</div>
							<div>
								<a
									href='https://www.argentina.gob.ar/aaip/datospersonales/reclama/30710605366--RL-2019-190460-APN-DNPDP'
									target='_blank'
									rel='noreferrer'
								>
									<img
										src='https://www.argentina.gob.ar/sites/default/files/aaip-isologo.png'
										border='0'
										alt='AAIP RNBD'
										width='55px'
										height='71px'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
