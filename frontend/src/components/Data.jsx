import React from 'react'

export default function Data( { loading, urlList, error } ) {
	if(error) return "Couldn't fetch URLs"
  if(loading) return 'Loading '
	return (
		<div className='flex justify-center'>
			<table className='table-auto'>
				<thead>
					<tr>
						<th className="text-left px-4 py-2">Full URL</th>
						<th className="text-left px-4 py-2">Short URL</th>
						<th className="text-left px-4 py-2">Click</th>
					</tr>
				</thead>
				<tbody>
					{urlList.map(url => {
						return(
							<tr key={url.shortId} className=''>
								<td className="text-left max-w-xs truncate px-4 py-2"><a href={url.fullUrl} className='hover:text-blue-600'>{url.fullUrl}</a></td>
								<td className="text-left px-4 py-2"><a href={`http://localhost:3000/${url.shortId}`} className='hover:text-blue-600'>{url.shortId}</a></td>
								<td className="text-left px-4 py-2"><span>Clicks: {url.clicks}</span></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
  )
}
