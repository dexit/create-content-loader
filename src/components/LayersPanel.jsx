import React, { useState } from 'react'
import classnames from 'classnames'

const LayersPanel = ({ 
  layers, 
  activeLayer, 
  onLayerSelect, 
  onLayerToggle, 
  onLayerDelete, 
  onLayerRename,
  onCreateGroup,
  onUngroupObjects 
}) => {
  const [editingLayer, setEditingLayer] = useState(null)
  const [layerName, setLayerName] = useState('')

  const handleRename = (layerId) => {
    if (layerName.trim()) {
      onLayerRename(layerId, layerName.trim())
      setEditingLayer(null)
      setLayerName('')
    }
  }

  const startRename = (layer) => {
    setEditingLayer(layer.id)
    setLayerName(layer.name)
  }

  return (
    <div className="layers-panel">
      <div className="layers-panel__header">
        <h3>Layers</h3>
        <div className="layers-panel__actions">
          <button 
            className="layers-panel__btn"
            onClick={onCreateGroup}
            title="Group selected objects"
          >
            Group
          </button>
          <button 
            className="layers-panel__btn"
            onClick={onUngroupObjects}
            title="Ungroup selected objects"
          >
            Ungroup
          </button>
        </div>
      </div>
      
      <div className="layers-panel__list">
        {layers.map((layer) => (
          <div 
            key={layer.id}
            className={classnames('layers-panel__item', {
              'layers-panel__item--active': layer.id === activeLayer,
              'layers-panel__item--hidden': !layer.visible
            })}
          >
            <div className="layers-panel__item-content">
              <button
                className="layers-panel__visibility"
                onClick={() => onLayerToggle(layer.id)}
                title={layer.visible ? 'Hide layer' : 'Show layer'}
              >
                {layer.visible ? '👁' : '👁‍🗨'}
              </button>
              
              {editingLayer === layer.id ? (
                <input
                  type="text"
                  value={layerName}
                  onChange={(e) => setLayerName(e.target.value)}
                  onBlur={() => handleRename(layer.id)}
                  onKeyPress={(e) => e.key === 'Enter' && handleRename(layer.id)}
                  className="layers-panel__input"
                  autoFocus
                />
              ) : (
                <span 
                  className="layers-panel__name"
                  onClick={() => onLayerSelect(layer.id)}
                  onDoubleClick={() => startRename(layer)}
                >
                  {layer.name}
                </span>
              )}
              
              <div className="layers-panel__info">
                <span className="layers-panel__count">
                  {layer.objects?.length || 0} objects
                </span>
                <span className="layers-panel__type">
                  {layer.type === 'group' ? '📁' : '📄'}
                </span>
              </div>
              
              <button
                className="layers-panel__delete"
                onClick={() => onLayerDelete(layer.id)}
                title="Delete layer"
              >
                ×
              </button>
            </div>
          </div>
        ))}
        
        {layers.length === 0 && (
          <div className="layers-panel__empty">
            No layers yet. Create some objects to see them here.
          </div>
        )}
      </div>
    </div>
  )
}

export default LayersPanel